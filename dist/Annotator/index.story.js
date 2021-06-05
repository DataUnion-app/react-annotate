import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action as actionAddon } from "@storybook/addon-actions";
import exampleImage from "../ImageCanvas/seves_desk.story.jpg";
import bikeImg1 from "./bike-pic.png";
import bikeImg2 from "./bike-pic2.png";
import { HotKeys } from "react-hotkeys";
import { defaultKeyMap } from "../ShortcutsManager";
import Annotator from "./";
import { testRegions } from "../ImageCanvas/index.story";
var middlewares = [function (store) {
  return function (next) {
    return function (action) {
      actionAddon(action.type)(action);
      return next(action);
    };
  };
}];
storiesOf("Annotator", module).add("Basic", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: middlewares,
    labelImages: true,
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    regionTagList: ["tag1", "tag2", "tag3"],
    imageClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    imageTagList: ["tag1", "tag2", "tag3"],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=1",
      name: "Frame 0036"
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=2",
      name: "Frame 0037"
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=3",
      name: "Frame 0038"
    }]
  });
}).add("Basic - Allow Comments", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: middlewares,
    labelImages: true,
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    regionTagList: ["tag1", "tag2", "tag3"],
    imageClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    imageTagList: ["tag1", "tag2", "tag3"],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=1",
      name: "Frame 0036"
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=2",
      name: "Frame 0037"
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=3",
      name: "Frame 0038"
    }],
    allowComments: true
  });
}).add("Fixed Size Container", function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 500,
      height: 500
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: [function (store) {
      return function (next) {
        return function (action) {
          actionAddon(action.type)(action);
          return next(action);
        };
      };
    }],
    labelImages: true,
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    regionTagList: ["tag1", "tag2", "tag3"],
    imageClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    imageTagList: ["tag1", "tag2", "tag3"],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=1",
      name: "Frame 0036"
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=2",
      name: "Frame 0037"
    }, {
      src: "https://loremflickr.com/100/100/cars?lock=3",
      name: "Frame 0038"
    }]
  }));
}).add("Shrunk Annotator (Test Fullscreen)", function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 100
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    regionTagList: ["tag1", "tag2", "tag3"],
    middlewares: [function (store) {
      return function (next) {
        return function (action) {
          actionAddon(action.type)(action);
          return next(action);
        };
      };
    }],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }]
  }));
}).add("Annotator w/o No Region Labels or Image Labels", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: middlewares,
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }]
  });
}).add("Annotator with no enabled tools", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    enabledTools: [],
    showTags: false,
    middlewares: middlewares,
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }]
  });
}).add("Bounding Box Annotator with output to console.log", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: function onExit(out) {
      window.lastOutput = out;
      console.log(out);
    },
    taskDescription: "## Annotate Hands\nDraw a bounding box around each hand.",
    enabledTools: ["select", "create-box"],
    regionClsList: ["Hand", "Face"],
    regionTagList: ["Open Pinch", "Closed Pinch", "In Frame"],
    showTags: false,
    images: [{
      src: "https://s3.amazonaws.com/jobstorage.workaround.online/Atheer/video-frames/VID_20190111_161054.mp4_frame017.png",
      name: "Bounding Box Test",
      regions: []
    }, {
      src: "https://s3.amazonaws.com/jobstorage.workaround.online/Atheer/video-frames/VID_20190111_161054.mp4_frame001.png",
      name: "Bounding Box Test",
      regions: []
    }]
  });
}).add("Bounding Box Annotator with allowed area", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    taskDescription: "## Annotate Hands\nDraw a bounding box around each hand.",
    enabledTools: ["select", "create-box"],
    regionClsList: ["Hand", "Face"],
    regionTagList: ["Open Pinch", "Closed Pinch", "In Frame"],
    showTags: false,
    allowedArea: {
      x: 0,
      y: 0.6,
      w: 0.3,
      h: 0.3
    },
    images: [{
      src: "https://s3.amazonaws.com/jobstorage.workaround.online/Atheer/video-frames/VID_20190111_161054.mp4_frame017.png",
      name: "Bounding Box Test",
      regions: []
    }]
  });
}).add("Car Annotation", function () {
  return /*#__PURE__*/React.createElement(Annotator, _defineProperty({
    onExit: actionAddon("onExit"),
    middlewares: middlewares,
    labelImages: true,
    regionClsList: ["Car", "Sign", "Construction Barrier"],
    regionTagList: ["Moving", "Stopped", "Obstacle"],
    imageClsList: ["On Street", "Sidewalk", "Other"] // imageTagList={["tag1", "tag2", "tag3"]}
    ,
    images: [{
      src: bikeImg1,
      name: "Frame 03021",
      regions: [{
        cls: "Car",
        color: "hsl(82,100%,50%)",
        h: 0.45921666772960146,
        w: 0.3932156342484836,
        x: 0.6302148980776354,
        y: 0.5559504689545722,
        type: "box",
        id: "8776160642957009",
        tags: ["Stopped"],
        highlighted: false,
        editingLabels: false
      }, {
        cls: "Car",
        color: "hsl(264,100%,50%)",
        type: "box",
        id: "885140028730734",
        tags: ["Moving"],
        w: 0.2627711048576583,
        x: 0.20751775748638238,
        y: 0.5566583219431673,
        h: 0.268717618171478,
        highlighted: false,
        editingLabels: false
      }, {
        cls: "Car",
        color: "hsl(127,100%,50%)",
        w: 0.033016094117647055,
        x: 0.5051247779336334,
        y: 0.5396378545840628,
        h: 0.03423999999999994,
        type: "box",
        id: "5952553512262024",
        tags: ["Stopped"],
        highlighted: false,
        editingLabels: false
      }, {
        type: "box",
        x: 0.7847296794208894,
        y: 0.3635007199404308,
        w: 0.04871147880041349,
        h: 0.10995961095800888,
        highlighted: true,
        editingLabels: false,
        color: "hsl(268,100%,50%)",
        id: "5647593040225252",
        cls: "Sign"
      }]
    }, {
      src: bikeImg2,
      name: "Frame 03022",
      regions: [{
        type: "box",
        x: 0.12226982552783494,
        y: 0.5578947368421052,
        w: 0.3301518695958121,
        h: 0.33562583001232194,
        highlighted: false,
        editingLabels: false,
        color: "hsl(171,100%,50%)",
        id: "014393439034159128",
        cls: "Car",
        tags: ["Stopped"]
      }, {
        type: "box",
        x: 0.5018477698901193,
        y: 0.5954194079501558,
        w: 0.07194249496837657,
        h: 0.06826906557009338,
        highlighted: false,
        editingLabels: false,
        color: "hsl(17,100%,50%)",
        id: "02954614542034717",
        cls: "Car",
        tags: ["Moving"]
      }, {
        type: "box",
        x: 0.6483083881082046,
        y: 0.6217109311709718,
        w: 0.08786544324705947,
        h: 0.20450608002345438,
        highlighted: true,
        editingLabels: true,
        color: "hsl(337,100%,50%)",
        id: "9124138360972984",
        cls: "Construction Barrier",
        tags: ["Obstacle"]
      }, {
        type: "box",
        x: 0.7628671305695606,
        y: 0.6299511028935285,
        w: 0.12734928166820647,
        h: 0.2689292407634438,
        highlighted: false,
        editingLabels: false,
        color: "hsl(89,100%,50%)",
        id: "5960600741979638",
        cls: "Construction Barrier"
      }, {
        type: "box",
        x: 0.5871362440754417,
        y: 0.6232091442114366,
        w: 0.06562102723514573,
        h: 0.15281773012741662,
        highlighted: false,
        editingLabels: false,
        color: "hsl(326,100%,50%)",
        id: "7955287536996538",
        cls: "Construction Barrier"
      }, {
        type: "box",
        x: 0.42943330004934643,
        y: 0.6054718359824862,
        w: 0.053210066743122564,
        h: 0.054984658299147116,
        highlighted: false,
        editingLabels: false,
        color: "hsl(66,100%,50%)",
        id: "49573139861381166",
        cls: "Car",
        tags: ["Stopped"]
      }]
    }]
  }, "onExit", function onExit(out) {
    window.lastOutput = out;
    console.log(JSON.stringify(out.images));
  }));
}).add("Annotator blocks scroll from propagating", function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: "200vh"
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    showTags: false,
    middlewares: [function (store) {
      return function (next) {
        return function (action) {
          actionAddon(action.type)(action);
          return next(action);
        };
      };
    }],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "red"
    }
  }, "You shouldn't be able to see this"));
}).add("Annotator should not expand beyond parent", function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100vw",
      height: "100vh",
      padding: 100,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    showTags: false,
    middlewares: [function (store) {
      return function (next) {
        return function (action) {
          actionAddon(action.type)(action);
          return next(action);
        };
      };
    }],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }]
  }));
}).add("Video with frames as each image", function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100vw",
      height: "100vh",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    showTags: false,
    middlewares: [function (store) {
      return function (next) {
        return function (action) {
          actionAddon(action.type)(action);
          return next(action);
        };
      };
    }],
    images: [{
      src: "https://s3.amazonaws.com/asset.workaround.online/SampleVideo_1280x720_1mb.mp4",
      frameTime: 0,
      name: "Frame 1"
    }, {
      src: "https://s3.amazonaws.com/asset.workaround.online/SampleVideo_1280x720_1mb.mp4",
      frameTime: 4500,
      name: "Frame 2"
    }]
  }));
}).add("Keyframe video", function () {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100vw",
      height: "100vh",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: function onExit() {
      var _console;

      (_console = console).log.apply(_console, arguments);

      actionAddon("onExit").apply(void 0, arguments);
    },
    showTags: true,
    videoSrc: "https://s3.amazonaws.com/asset.workaround.online/SampleVideo_1280x720_1mb.mp4",
    videoTime: 1000,
    keyframes: {
      0: {
        regions: [{
          type: "point",
          x: 0.1608187134502924,
          y: 0.5769980506822612,
          highlighted: true,
          editingLabels: false,
          color: "hsl(238,100%,50%)",
          id: "9995495728521284"
        }, {
          type: "box",
          x: 0.089171974522293,
          y: 0.36801132342533616,
          w: 0.30573248407643316,
          h: 0.4170794998820476,
          highlighted: true,
          editingLabels: false,
          color: "hsl(263,100%,50%)",
          id: "04858393322065635"
        }]
      },
      3333: {
        regions: [{
          type: "point",
          x: 0.1608187134502924,
          y: 0.5769980506822612,
          highlighted: true,
          editingLabels: false,
          color: "hsl(238,100%,50%)",
          id: "9995495728521284"
        }, {
          type: "box",
          x: 0.14861995753715496,
          y: 0.0934182590233546,
          w: 0.3163481953290871,
          h: 0.7596131163010142,
          highlighted: true,
          editingLabels: false,
          color: "hsl(263,100%,50%)",
          id: "04858393322065635"
        }]
      }
    }
  }));
}).add("Override Next/Prev Button Handling", function () {
  var images = [exampleImage, "https://loremflickr.com/100/100/cars?lock=1", "https://loremflickr.com/100/100/cars?lock=2"];

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      selectedImageIndex = _useState2[0],
      changeSelectedImageIndex = _useState2[1];

  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    onNextImage: function onNextImage() {
      actionAddon("onNextImage")();
      changeSelectedImageIndex((selectedImageIndex + 1) % 3);
    },
    onPrevImage: function onPrevImage() {
      actionAddon("onPrevImage")();
      changeSelectedImageIndex((selectedImageIndex - 1 + 3) % 3);
    },
    labelImages: true,
    selectedImage: images[selectedImageIndex],
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    imageClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    images: [{
      src: exampleImage,
      name: "Seve's Desk"
    }, {
      src: images[1],
      name: "Frame 0036"
    }, {
      src: images[2],
      name: "Frame 0037"
    }]
  });
}).add("Override RegionEditLabel", function () {
  var images = [exampleImage, "https://loremflickr.com/100/100/cars?lock=1", "https://loremflickr.com/100/100/cars?lock=2"];

  var NewRegionEditLabel = function NewRegionEditLabel(_ref) {
    var region = _ref.region,
        editing = _ref.editing,
        onDelete = _ref.onDelete,
        onChange = _ref.onChange,
        onClose = _ref.onClose,
        onOpen = _ref.onOpen;
    return /*#__PURE__*/React.createElement("div", {
      style: {
        backgroundColor: "white"
      }
    }, "I'm the closed part", /*#__PURE__*/React.createElement("div", {
      style: {
        display: editing ? "block" : "none"
      }
    }, "I'm the part that shows when it's being edited!", /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onDelete(region);
      }
    }, "Delete This Region"), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onChange(_objectSpread({}, region, {
          cls: "awesome-value"
        }));
      }
    }, "Set Classification to \"awesome-value\""), /*#__PURE__*/React.createElement("button", {
      onClick: function onClick() {
        return onClose(region);
      }
    }, "Close the edit mode")));
  };

  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    labelImages: true,
    selectedImage: images[0],
    RegionEditLabel: NewRegionEditLabel,
    images: [{
      src: exampleImage,
      name: "Seve's Desk"
    }, {
      src: images[1],
      name: "Frame 0036"
    }, {
      src: images[2],
      name: "Frame 0037"
    }]
  });
}).add("Two on sample page w/ hotkeys", function () {
  return /*#__PURE__*/React.createElement(HotKeys, {
    keyMap: defaultKeyMap
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 600
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    imageClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    middlewares: [function (store) {
      return function (next) {
        return function (action) {
          actionAddon(action.type)(action);
          return next(action);
        };
      };
    }],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }]
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 600
    }
  }, /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: [function (store) {
      return function (next) {
        return function (action) {
          actionAddon(action.type)(action);
          return next(action);
        };
      };
    }],
    images: [{
      src: exampleImage,
      name: "Seve's Desk",
      regions: testRegions
    }]
  }))));
}).add("CORs Error (Pixel Segmentation)", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: middlewares,
    labelImages: true,
    fullImageSegmentationMode: true,
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    images: [{
      src: "https://placebear.com/200/300",
      name: "Frame 0036"
    }]
  });
}).add("Modify Allowed Area", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: middlewares,
    labelImages: true,
    fullImageSegmentationMode: true,
    allowedArea: {
      x: 0,
      y: 0.6,
      w: 0.3,
      h: 0.3
    },
    enabledTools: ["modify-allowed-area"],
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    images: [{
      src: exampleImage,
      name: "Frame 0036"
    }]
  });
}).add("Hide Next, Hide Header Text", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    labelImages: true,
    hideNext: true,
    hideHeaderText: true,
    fullImageSegmentationMode: true,
    enabledTools: ["modify-allowed-area"],
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    images: [{
      src: exampleImage,
      name: "Frame 0036"
    }]
  });
}).add("Hide Header", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    labelImages: true,
    hideHeader: true,
    fullImageSegmentationMode: true,
    enabledTools: ["modify-allowed-area"],
    regionClsList: ["Alpha", "Beta", "Charlie", "Delta"],
    images: [{
      src: exampleImage,
      name: "Frame 0036"
    }]
  });
});