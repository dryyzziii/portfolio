import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import * as THREE from 'three';
import { FBXLoader } from 'three-stdlib';

@Component({
  selector: 'app-skillstree',
  standalone: true,
  imports: [NgFor, CommonModule],
  templateUrl: './skillstree.component.html',
  styleUrls: ['./skillstree.component.scss']
})
export class SkillsTreeComponent implements AfterViewInit, OnDestroy {
  private renderer: THREE.WebGLRenderer | undefined;
  private scene: THREE.Scene | undefined;
  private camera: THREE.PerspectiveCamera | undefined;
  private animationFrameId: number | undefined;
  private mouseX: number = 0;
  private mouseY: number = 0;
  private isMouseDown: boolean = false;
  private prevMouseX: number = 0;
  private prevMouseY: number = 0;
  private containerRect: DOMRect | undefined;
  private skillPositions: { x: number; y: number; z: number; offsetX: number; offsetY: number; offsetZ: number }[] = [];
  private models: { [key: string]: THREE.Object3D } = {};

  public skills = [
    { name: 'React', modelPath: '/assets/fbx/react.fbx' },
    { name: 'Angular', modelPath: '/assets/fbx/angular.fbx' },
    { name: 'HTML', modelPath: '/assets/fbx/html.fbx' },
    { name: 'CSS', modelPath: '/assets/fbx/css.fbx' },
    { name: 'C', modelPath: '/assets/fbx/C.fbx' },
    { name: 'Python', modelPath: '/assets/fbx/python.fbx' },
    { name: 'MySQL', modelPath: '/assets/fbx/mysql.fbx' },
    { name: 'JavaScript', modelPath: '/assets/fbx/javascript.fbx' },
    { name: 'TypeScript', modelPath: '/assets/fbx/typescript.fbx' },
    { name: 'VueJS', modelPath: '/assets/fbx/vuejs.fbx' }
  ];

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.initThreeJS();
    this.loadModels();
    this.animate();
  }

  ngOnDestroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    this.renderer!.dispose();
  }

  private initThreeJS() {
    const container = this.el.nativeElement.querySelector('.container-skillsTree');
    this.containerRect = container.getBoundingClientRect();

    // Initialize renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    this.renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(this.renderer.domElement);

    // Initialize scene
    this.scene = new THREE.Scene();

    // Add lighting to the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6); // Soft white light
    this.scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(0, 1, 1).normalize();
    this.scene.add(directionalLight);

    // Initialize camera
    this.camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 2000);
    this.camera.position.set(0, 0, 1200); // Ensure the camera is positioned to view the models
    this.camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure the camera is looking at the center

    // Calculate positions for skills
    const radius = 800; // Adjust radius to avoid overlap and keep within view
    const angleStep = (2 * Math.PI) / this.skills.length;

    this.skills.forEach((skill, index) => {
      const angle = index * angleStep;
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      const z = 0; // Set z to 0 to keep the models in the same plane

      // Save initial positions with small random offsets for irregular movement
      this.skillPositions.push({ x, y, z, offsetX: Math.random() * 20 - 10, offsetY: Math.random() * 20 - 10, offsetZ: Math.random() * 20 - 10 });
    });
  }

  private loadModels() {
    const loader = new FBXLoader();

    this.skills.forEach(skill => {
      loader.load(skill.modelPath, (object) => {
        object.scale.set(10, 10, 10); // Adjust scaling of the models

        // Ensure materials are applied correctly
        object.traverse(function (child) {
          if (child instanceof THREE.Mesh) {
            // Make sure the color and texture are correctly applied
            if (child.material.map) {
              child.material = new THREE.MeshStandardMaterial({
                map: child.material.map
              });
            } else {
              child.material = new THREE.MeshStandardMaterial({
                color: child.material.color
              });
            }
          }
        });

        this.models[skill.name] = object;
        this.scene!.add(object);
      }, undefined, (error) => {
        console.error(`Error loading ${skill.name} model:`, error);
      });
    });
  }

  private animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    // Update the position styles dynamically
    this.updateSkillPositions();

    this.renderer!.render(this.scene!, this.camera!);
  }

  private updateSkillPositions() {
    const container = this.el.nativeElement.querySelector('.container-skillsTree');
    const time = Date.now() * 0.0001;

    this.skills.forEach((skill, index) => {
      const position = this.skillPositions[index];
      const angle = time + index * 0.2; // Adjust angle increment to spread out more
      let x = position.x * Math.cos(angle) - position.z * Math.sin(angle);
      let y = position.y + Math.sin(time + position.offsetY) * 10;
      const z = position.z * Math.cos(angle) + position.x * Math.sin(angle);

      // Ensure the models stay within canvas boundaries
      const model = this.models[skill.name];
      if (model) {
        model.position.set(
          Math.max(-container.clientWidth / 2, Math.min(container.clientWidth / 2, x)),
          Math.max(-container.clientHeight / 2, Math.min(container.clientHeight / 2, y)),
          z
        );
      }
    });
  }

  @HostListener('mousedown', ['$event'])
  onMouseDown(event: MouseEvent) {
    this.isMouseDown = true;
    this.prevMouseX = event.clientX;
    this.prevMouseY = event.clientY;
  }

  @HostListener('mouseup')
  onMouseUp() {
    this.isMouseDown = false;
  }

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    if (this.isMouseDown) {
      const deltaX = event.clientX - this.prevMouseX;
      const deltaY = event.clientY - this.prevMouseY;

      this.camera!.rotation.y -= deltaX * 0.005;
      this.camera!.rotation.x -= deltaY * 0.005;

      this.prevMouseX = event.clientX;
      this.prevMouseY = event.clientY;
    }

    const container = this.el.nativeElement.querySelector('.container-skillsTree');
    if (this.containerRect) {
      const rect = this.containerRect;
      this.mouseX = ((event.clientX - rect.left) / rect.width) * 100 - 50;
      this.mouseY = ((event.clientY - rect.top) / rect.height) * 100 - 50;
    }
  }
}