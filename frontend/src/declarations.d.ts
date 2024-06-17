declare module '../../../assets/js/FBXLoader.js' {
    import * as THREE from 'three';
  
    export class FBXLoader extends THREE.Loader {
      constructor(manager?: THREE.LoadingManager);
      load(
        url: string,
        onLoad: (object: THREE.Group) => void,
        onProgress?: (xhr: XMLHttpRequest) => void,
        onError?: (event: ErrorEvent) => void
      ): void;
      parse(data: ArrayBuffer | string, path: string): THREE.Group;
    }
  }
  