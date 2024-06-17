export class button {
    text: string;
    link: string;
    linkName?: string;
    svgLink: string;
    color?: string;
  
    constructor(text: string, link: string,svgLink: string, linkName?: string, color?: string) {
      this.link = link;
      this.text = text;
      this.linkName = linkName;
      this.svgLink = svgLink;
      this.color = color;
    }
}