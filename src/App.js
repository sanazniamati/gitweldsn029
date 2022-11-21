import {
  Stage,
  Layer,
  Line,
  Group,
  Image,
  Text,
  Arrow,
  Shape,
  TextPath,
} from "react-konva";
import useImage from "use-image";
import { useRef, useState } from "react";

export default function App() {
  const url = "img.gif";
  const [image] = useImage(url);
  const stageRef = useRef();
  const [text, setText] = useState("");
  const handleMouseMove = (e) => {
    const stage = e.target.getStage();
    const pointerPosition = stage.getPointerPosition();
    const x = pointerPosition.x;
    const y = pointerPosition.y;
    setText(() => "X:" + x + " Y:" + y);
  };
  const handelMouseOut = () => {
    setText("");
  };

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handelMouseOut}
    >
      <Layer>
        <Group>
          <Text text={text} x={10} y={50} fontSize={20} />
        </Group>
        <Line stroke={"green"} strokeWidth={2} points={[171, 265, 265, 265]} />
        <Line stroke={"green"} strokeWidth={2} points={[171, 458, 265, 458]} />
        <Arrow
          points={[174, 267, 174, 455]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          stroke={"blue"}
          strokeWidth={3}
        />
        <TextPath
          x={161}
          y={287}
          fill={"#333"}
          data={"M 0 100 L 0 50"}
          text={"t2"}
          fontSize={30}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(265, 265);
            context.lineTo(414, 265);
            context.quadraticCurveTo(480, 349, 512, 345);
            context.lineTo(560, 457);
            context.lineTo(264, 458);
            context.lineTo(266, 373);
            context.lineTo(283, 367);
            context.lineTo(247, 357);
            context.lineTo(264, 352);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          stroke="red"
          strokeWidth={4}
        />
        <Line stroke={"green"} strokeWidth={2} points={[858, 256, 950, 256]} />
        <Line stroke={"green"} strokeWidth={2} points={[858, 458, 950, 458]} />
        <Arrow
          points={[950, 258, 950, 456]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          fill={"yellow"}
          stroke={"blue"}
          strokeWidth={3}
        />
        <TextPath
          x={902}
          y={321}
          fill={"#333"}
          data={"M 0 100 L 0 50"}
          text={"h"}
          fontSize={30}
        />
        <TextPath
          x={936}
          y={280}
          fill={"#333"}
          data={"M 0 100 L 0 50"}
          text={"t1"}
          fontSize={30}
        />

        <Line stroke={"green"} strokeWidth={2} points={[608, 346, 913, 348]} />
        <Arrow
          points={[913, 348, 913, 456]}
          pointerLength={5}
          pointerWidth={5}
          pointerAtBeginning={true}
          fill={"yellow"}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(720, 256);
            context.lineTo(858, 256);
            context.lineTo(857, 347);
            context.lineTo(838, 353);
            context.lineTo(876, 363);
            context.lineTo(858, 369);
            context.lineTo(857, 458);
            context.lineTo(561, 457);
            context.lineTo(607, 348);
            context.quadraticCurveTo(645, 349, 720, 256);
            context.closePath();
            context.fillStrokeShape(shape);
          }}
          stroke="red"
          strokeWidth={4}
        />

        {/*Beta*/}
        <Line stroke={"green"} strokeWidth={2} points={[719, 255, 741, 233]} />
        <Line stroke={"green"} strokeWidth={2} points={[648, 327, 647, 194]} />
        <Text x={691} y={158} text={"β"} fontSize={30} />
        <Arrow
          points={[755, 242, 744, 235]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Arrow
          points={[632, 197, 646, 197]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(647, 196);
            context.quadraticCurveTo(702, 198, 741, 233);
            context.fillStrokeShape(shape);
          }}
          stroke="green"
          strokeWidth={2}
        />
        {/*  R*/}
        <Arrow
          points={[608, 289, 632, 334]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <TextPath
          x={608}
          y={270}
          fill={"#333"}
          text={"R"}
          data={"M 0 0 L 300 320 "}
          fontSize={30}
        />

        {/*    alfa*/}
        <Text x={542} y={360} text={"α"} fontSize={30} />
        <Arrow
          points={[527, 414, 537, 404]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(537, 404);
            context.quadraticCurveTo(561, 371, 585, 400);
            context.fillStrokeShape(shape);
          }}
          stroke="green"
          strokeWidth={2}
        />
        <Arrow
          points={[595, 410, 585, 400]}
          pointerLength={5}
          pointerWidth={5}
          stroke={"blue"}
          strokeWidth={3}
        />
        <Shape
          sceneFunc={(context, shape) => {
            context.beginPath();
            context.moveTo(412, 456);
            context.lineTo(412, 510);
            context.lineTo(710, 510);
            context.lineTo(710, 456);
            context.fillStrokeShape(shape);
          }}
          stroke="red"
          strokeWidth={4}
          draggable
        />
        <Line points={[432, 457, 412, 478]} stroke="red" strokeWidth={2} />
        <Line points={[461, 457, 411, 508]} stroke="red" strokeWidth={2} />
        <Line points={[489, 457, 441, 508]} stroke="red" strokeWidth={2} />
        <Line points={[519, 457, 468, 508]} stroke="red" strokeWidth={2} />
        <Line points={[549, 457, 495, 508]} stroke="red" strokeWidth={2} />
        <Line points={[579, 457, 525, 508]} stroke="red" strokeWidth={2} />
        <Line points={[605, 457, 555, 508]} stroke="red" strokeWidth={2} />
        <Line points={[635, 457, 585, 508]} stroke="red" strokeWidth={2} />
        <Line points={[664, 457, 610, 508]} stroke="red" strokeWidth={2} />
        <Line points={[690, 457, 640, 508]} stroke="red" strokeWidth={2} />
        <Line points={[709, 466, 668, 508]} stroke="red" strokeWidth={2} />
        <Line points={[710, 493, 694, 508]} stroke="red" strokeWidth={2} />
      </Layer>
    </Stage>
  );
}
