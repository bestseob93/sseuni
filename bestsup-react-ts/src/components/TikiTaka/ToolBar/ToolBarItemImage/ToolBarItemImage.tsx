import * as React from 'react';

import image from '../ToolBarIcons/image.svg';
import { findLastNode } from 'helpers/domHelpers';

export interface IToolBarItemImageProps {
  handleGistCode: (txt: string) => void,
  addFirstImageToThumbnail: (file: any) => void
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

  handleChange(selectedFiles: FileList | null): void {
    console.log(selectedFiles);
    if (selectedFiles) {
      if (selectedFiles.length > 0) {
        const fileToLoad = selectedFiles[0];
        this.props.addFirstImageToThumbnail(selectedFiles[0]);
        if (fileToLoad.type.match("image.*")) {
          const fileReader = new FileReader();
          fileReader.onload = (fileLoadedEvent: ProgressEvent | any): void => {
            if (fileLoadedEvent !== null) {
              const newImgEle = document.createElement("img");
              newImgEle.src = fileLoadedEvent.target.result;
              this.insertImage(newImgEle);
            }
          };

          fileReader.readAsDataURL(fileToLoad);
        }
      }
    }
  }

  render() {
    return (
      <li className="toolbar-btn image">
        <label htmlFor="inputImage"><img src={image} /></label>
        <input
          id="inputImage"
          type="file"
          style={{position: 'fixed', top: '-100em'}}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => { this.handleChange(e.target.files)}} />
      </li>
    );
  }
}

export default ToolBarItemImage;
