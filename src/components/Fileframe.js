import React, { Component, Fragment } from "react";

export default class Fileframe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      files: [],
    };
  }

  // onDrop = (files) => {
  //   // POST to a test endpoint for demo purposes
  //   const req = request.post('https://httpbin.org/post');

  //   files.forEach(file => {
  //     req.attach(file.name, file);
  //   });

  //   req.end();
  // }

  onPreviewDrop = (files) => {
    this.setState({
      files: this.state.files.concat(files),
    });
  }

  render() {
   

    return (
    
  
        // <ReactDropzone size="lg" className="innerfileframe" id="innerfileframe"
        //   onDrop={this.onDrop}
        // >
        //   <p>하단에 버튼을 클릭하여 PDF를 변환해보세요!</p>
        // </ReactDropzone>

        <div size="lg" className="innerfileframe" id="innerfileframe">
          <p id="file_title">하단에 아이콘을 클릭해보세요!</p>
          <div></div>
        </div>

        // // {/* <h2>Image Previews</h2>
        // // <ReactDropzone
        // //   accept="image/*"
        // //   onDrop={this.onPreviewDrop}
        // // >
        // //   Drop an image, get a preview!
        // // </ReactDropzone>
        // // {this.state.files.length > 0 &&
        // //   <Fragment>
        // //     <h3>Previews</h3>
        // //     {this.state.files.map((file) => (
        // //       <img
        // //         alt="Preview"
        // //         key={file.preview}
        // //         src={file.preview}
        // //         style={previewStyle}
        // //       />
        // //     ))}
        // //   </Fragment> */}
        // }

    );
  }
}