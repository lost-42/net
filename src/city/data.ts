// 导入图片资源，让Vite正确处理图片路径
import img1 from "./imgs/南云美鸟.webp";
import img2 from "./imgs/新仓.webp";
import img3 from "./imgs/泉和子.webp";
import img4 from "./imgs/真壁鹤菱.webp";
import img5 from "./imgs/真壁立涌.webp";
import img6 from "./imgs/真壁茉莉.webp";
import img7 from "./imgs/雨饰悦理.webp";
import img8 from "./imgs/泉莉子.webp";
import img9 from "./imgs/安达太良家的爸爸.webp";
import img10 from "./imgs/安达太良家的妈妈.webp";
import img11 from "./imgs/安达太良达太.webp";
import img12 from "./imgs/安达太良良太.webp";
import img13 from "./imgs/安达太良博士.webp";
import img14 from "./imgs/安达太良鸥.webp";
import img15 from "./imgs/安达太良海・空.webp";
import img16 from "./imgs/鬼鱼板.webp";
import img17 from "./imgs/轰.webp";
import img18 from "./imgs/田边菫樱子美.webp";
import img19 from "./imgs/穂高.webp";
import img20 from "./imgs/好人.webp";
import img21 from "./imgs/光岳伸晃.webp";
import img22 from "./imgs/老太婆.webp";

export default {
    nodes: [
        { id: "1", text: "南云美鸟", data: { pic: img1 } },
        { id: "2", text: "新仓", data: { pic: img2 } },
        { id: "3", text: "泉和子", data: { pic: img3 } },
        { id: "4", text: "真壁鹤菱", data: { pic: img4 } },
        { id: "5", text: "真壁立涌", data: { pic: img5 } },
        { id: "6", text: "真壁茉莉", data: { pic: img6 } },
        { id: "7", text: "雨饰悦理", data: { pic: img7 } },
        { id: "8", text: "泉莉子", data: { pic: img8 } },
        { id: "9", text: "安达太良家的爸爸", data: { pic: img9 } },
        { id: "10", text: "安达太良家的妈妈", data: { pic: img10 } },
        { id: "11", text: "安达太良达太", data: { pic: img11 } },
        { id: "12", text: "安达太良良太", data: { pic: img12 } },
        { id: "13", text: "安达太良博士", data: { pic: img13 } },
        { id: "14", text: "安达太良鸥", data: { pic: img14 } },
        { id: "15", text: "安达太良海・空", data: { pic: img15 } },
        { id: "16", text: "鬼鱼板", data: { pic: img16 } },
        { id: "17", text: "轰", data: { pic: img17 } },
        { id: "18", text: "田边菫樱子美", data: { pic: img18 } },
        { id: "19", text: "穂高", data: { pic: img19 } },
        { id: "20", text: "好人", data: { pic: img20 } },
        { id: "21", text: "光岳伸晃", data: { pic: img21 } },
        { id: "22", text: "老太婆", data: { pic: img22 } },
    ],
    lines: [
        { from: "1", to: "4", text: "店长" },
        { from: "1", to: "21", text: "剧团打工" },
        { from: "1", to: "22", text: "房东" },
        { from: "2", to: "1", text: "前辈" },
        { from: "3", to: "1", text: "朋友" },
        { from: "3", to: "2", text: "朋友" },
        { from: "3", to: "8", text: "妹" },
        { from: "3", to: "17", text: "编辑" },
        { from: "4", to: "5", text: "子" },
        { from: "4", to: "6", text: "女" },
        { from: "4", to: "20", text: "顾客" },
        { from: "5", to: "8", text: "同学(喜欢)" },
        { from: "6", to: "5", text: "兄" },
        { from: "6", to: "7", text: "朋友" },
        { from: "9", to: "4", text: "朋友" },
        { from: "9", to: "10", text: "妻" },
        { from: "9", to: "11", text: "长子" },
        { from: "9", to: "12", text: "次子" },
        { from: "9", to: "13", text: "父" },
        { from: "9", to: "14", text: "长女" },
        { from: "9", to: "15", text: "次女・三女" },
        { from: "12", to: "5", text: "同学" },
        { from: "12", to: "8", text: "同学" },
        { from: "16", to: "3", text: "粉丝" },
        { from: "16", to: "17", text: "编辑" },
        { from: "18", to: "11", text: "喜欢" },
        { from: "18", to: "19", text: "管家" },
        { from: "18", to: "20", text: "表彰" },
    ],
};