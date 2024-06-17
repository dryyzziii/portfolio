import { button } from "./button";

export class projet {
    id: number;
    image: string;
    text: string;
    title: string;
    buttonCV: button;
    date?: string
    imageTab?: string[]
  
    constructor(id: number,image: string,title: string, text: string, button: button, date?:string, imageTab?: string[]) {
      this.image = image;
      this.id = id;
      this.text = text;
      this.buttonCV = button;
      this.title = title;
      this.date = date
      this.imageTab = imageTab
    }
}