// 导入图片资源，让Vite正确处理图片路径
import img1 from "./imgs/贝尔·克朗尼.png";
import img2 from "./imgs/赫斯缇雅.png";
import img3 from "./imgs/艾丝·华伦斯坦.png";
import img4 from "./imgs/莉莉露卡·厄德.png";
import img5 from "./imgs/琉·利昂.png";
import img6 from "./imgs/倭·命.png";
import img7 from "./imgs/韦尔夫·克洛.png";

export default {
    nodes: [
        { id: "1", text: "贝尔·克朗尼", data: { pic: img1 } },
        { id: "2", text: "赫斯缇雅", data: { pic: img2 } },
        { id: "3", text: "艾丝·华伦斯坦", data: { pic: img3 } },
        { id: "4", text: "莉莉露卡·厄德", data: { pic: img4 } },
        { id: "5", text: "琉·利昂", data: { pic: img5 } },
        { id: "6", text: "倭·命", data: { pic: img6 } },
        { id: "7", text: "韦尔夫·克洛", data: { pic: img7 } },
    ],
    lines: [
        { from: "1", to: "2", text: "神明" },
        { from: "2", to: "1", text: "喜欢" },
        { from: "1", to: "3", text: "仰慕" },
        { from: "4", to: "1", text: "喜欢" },
        { from: "4", to: "2", text: "神明" },
        { from: "5", to: "1", text: "帮助" },
        { from: "6", to: "2", text: "神明" },
        { from: "7", to: "2", text: "神明" },
    ],
};
