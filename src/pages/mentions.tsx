import Mentions from "rc-mentions";
import Mention1 from "@components/Mention1";
import Mention2 from "@components/Mention2";

const { Option } = Mentions;
const mentions = () => {
  return (
    <div className="grid h-screen bg-gray-800 place-items-center">
      {/* <div className="w-[200px] h-[100px]">
        <Mentions autoSize={true}>
          <Option value="light">Light</Option>
          <Option value="bamboo">Bamboo</Option>
          <Option value="cat">Cat</Option>
        </Mentions>
      </div> */}
      <Mention1 />
      <Mention2 />
    </div>
  );
};

export default mentions;
