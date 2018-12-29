import * as React from 'react';

import image from '../ToolBarIcons/image.svg';
import { findLastNode } from 'helpers/domHelpers';

export interface IToolBarItemImageProps {
  handleGistCode: (txt: string) => void,
  addImageToS3: (file: any) => Promise<string>
}

class ToolBarItemImage extends React.Component<IToolBarItemImageProps, {}> {
  insertImage = (img: Node): void => {
    const editorContainer = document.querySelector('.tikitaka-editor div[contenteditable="true"]');

    if (editorContainer) {
      const lastNode = findLastNode(editorContainer);

      const fakeFigure = document.createElement('figure');
      const imageContainer = document.createElement('div');
      imageContainer.setAttribute('class', 'image-container');
      imageContainer.setAttribute('contenteditable', 'false');

      fakeFigure.appendChild(imageContainer);
      imageContainer.appendChild(img);
      lastNode.appendChild(fakeFigure);

      this.props.handleGistCode(`${fakeFigure.innerHTML}<p><br /></p>`);
    }
  }

  async handleChange(selectedFiles: FileList | null): Promise<void> {
    console.log(selectedFiles);
    if (selectedFiles) {
      if (selectedFiles.length > 0) {
        const fileToLoad = selectedFiles[0];
        const s3UrlOfFile = await this.props.addImageToS3(fileToLoad);
        console.log(s3UrlOfFile);
        const newImgEle = document.createElement("img");

        newImgEle.src = s3UrlOfFile;
        this.insertImage(newImgEle);
      }
    }
  }

  render() {
    return (
      <li className="toolbar__button image">
        <label htmlFor="inputImage"><img className="toolbar__icon" src={image} /></label>
        <input
          id="inputImage"
          type="file"
          className="image__input-hidden"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.handleChange(e.target.files)}} />
      </li>
    );
  }
}

export default ToolBarItemImage;
