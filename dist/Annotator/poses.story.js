import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { action as actionAddon } from "@storybook/addon-actions";
import dancingManImage from "../ImageCanvas/dancing-man.story.jpg";
import dabKeyframes from "./dab-keyframes.story.json";
import Annotator from "./";
var dancingManVideo = "https://s3.us-east-1.amazonaws.com/asset.workaround.online/developer-samples/how-to-dab.mp4";
var middlewares = [function (store) {
  return function (next) {
    return function (action) {
      actionAddon(action.type)(action);
      console.log(action);
      return next(action);
    };
  };
}];
storiesOf("Annotator (Poses)", module).add("Image", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: actionAddon("onExit"),
    middlewares: middlewares,
    labelImages: true,
    enabledTools: ["create-keypoints"],
    keypointDefinitions: {
      human: {
        connections: [["head", "sternum"], ["sternum", "leftElbow"], ["sternum", "rightElbow"]],
        landmarks: {
          head: {
            label: "Head",
            color: "#f00",
            defaultPosition: [0, -0.05]
          },
          sternum: {
            label: "Torso",
            color: "#0f0",
            defaultPosition: [0, 0]
          },
          leftElbow: {
            label: "Left Elbow",
            color: "#00f",
            defaultPosition: [-0.05, 0]
          },
          rightElbow: {
            label: "Right Elbow",
            color: "#00f",
            defaultPosition: [0.05, 0]
          }
        }
      }
    },
    images: [{
      src: dancingManImage,
      name: "Dancing Man",
      regions: [{
        type: "keypoints",
        id: "keypoints1",
        keypointsDefinitionId: "human",
        highlighted: true,
        points: {
          head: {
            x: 0.54,
            y: 0.2
          },
          sternum: {
            x: 0.57,
            y: 0.3
          },
          leftElbow: {
            x: 0.4,
            y: 0.39
          },
          rightElbow: {
            x: 0.7,
            y: 0.32
          }
        },
        visible: true
      }]
    }]
  });
}).add("Video", function () {
  return /*#__PURE__*/React.createElement(Annotator, {
    onExit: function onExit() {
      var _console;

      for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      actionAddon("onExit").apply(void 0, props);
      window.testPropsSavePlease = props;

      (_console = console).log.apply(_console, props);
    },
    labelImages: true,
    enabledTools: ["create-box", "create-keypoints"],
    videoSrc: dancingManVideo,
    keypointDefinitions: {
      human: {
        connections: [["head", "sternum"], ["sternum", "leftShoulder"], ["leftShoulder", "leftElbow"], ["leftElbow", "leftHand"], ["sternum", "rightShoulder"], ["rightShoulder", "rightElbow"], ["rightElbow", "rightHand"]],
        landmarks: {
          head: {
            label: "Head",
            color: "#f00",
            defaultPosition: [0, -0.05]
          },
          sternum: {
            label: "Torso",
            color: "#0f0",
            defaultPosition: [0, 0]
          },
          leftShoulder: {
            label: "Left Shoulder",
            color: "#00f",
            defaultPosition: [-0.05, 0]
          },
          leftHand: {
            label: "Left Hand",
            color: "#00f",
            defaultPosition: [-0.05, 0.05]
          },
          rightShoulder: {
            label: "Right Shoulder",
            color: "#00f",
            defaultPosition: [0.05, 0]
          },
          leftElbow: {
            label: "Left Elbow",
            color: "#00f",
            defaultPosition: [-0.08, 0.02]
          },
          rightElbow: {
            label: "Right Elbow",
            color: "#00f",
            defaultPosition: [0.08, 0.02]
          },
          rightHand: {
            label: "Right Hand",
            color: "#00f",
            defaultPosition: [0.05, 0.05]
          }
        }
      }
    },
    keyframes: dabKeyframes
  });
});