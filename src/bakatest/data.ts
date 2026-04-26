// 导入图片资源，让Vite正确处理图片路径
import img1 from "./imgs/吉井明久.webp";
import img2 from "./imgs/姬路瑞希.webp";
import img3 from "./imgs/坂本雄二.webp";
import img4 from "./imgs/雾岛翔子.webp";
import img5 from "./imgs/木下秀吉.webp";
import img6 from "./imgs/木下优子.webp";
import img7 from "./imgs/岛田美波.webp";
import img8 from "./imgs/清水美春.webp";
import img9 from "./imgs/土屋康太.webp";
import img10 from "./imgs/西村宗一.webp";
import img11 from "./imgs/福原慎.webp";
import img12 from "./imgs/岛田叶月.webp";
import img13 from "./imgs/工藤爱子.webp";
import img14 from "./imgs/久保利光.webp";
import img15 from "./imgs/吉井玲.webp";
import img16 from "./imgs/FFF团.webp";
import img17 from "./imgs/须川亮.webp";
import img18 from "./imgs/高桥洋子.webp";

export default {
    nodes: [
        { id: "1", text: "吉井明久", data: { pic: img1 } },
        { id: "2", text: "姬路瑞希", data: { pic: img2 } },
        { id: "3", text: "坂本雄二", data: { pic: img3 } },
        { id: "4", text: "雾岛翔子", data: { pic: img4 } },
        { id: "5", text: "木下秀吉", data: { pic: img5 } },
        { id: "6", text: "木下优子", data: { pic: img6 } },
        { id: "7", text: "岛田美波", data: { pic: img7 } },
        { id: "8", text: "清水美春", data: { pic: img8 } },
        { id: "9", text: "土屋康太", data: { pic: img9 } },
        { id: "10", text: "西村宗一", data: { pic: img10 } },
        { id: "11", text: "福原慎", data: { pic: img11 } },
        { id: "12", text: "岛田叶月", data: { pic: img12 } },
        { id: "13", text: "工藤爱子", data: { pic: img13 } },
        { id: "14", text: "久保利光", data: { pic: img14 } },
        { id: "15", text: "吉井玲", data: { pic: img15 } },
        { id: "16", text: "FFF团", data: { pic: img16 } },
        { id: "17", text: "须川亮", data: { pic: img17 } },
        { id: "18", text: "高桥洋子", data: { pic: img18 } },
    ],
    lines: [
        { from: "1", to: "2", text: "喜欢" },
        { from: "3", to: "1", text: "朋友(互坑)" },
        { from: "4", to: "3", text: "喜欢(控制)" },
        { from: "1", to: "5", text: "朋友(喜欢)" },
        { from: "5", to: "6", text: "姐姐" },
        { from: "6", to: "4", text: "班长" },
        { from: "1", to: "3", text: "班长" },
        { from: "7", to: "1", text: "喜欢" },
        { from: "1", to: "7", text: "朋友" },
        { from: "8", to: "7", text: "喜欢" },
        { from: "1", to: "9", text: "朋友" },
        { from: "1", to: "10", text: "班主任" },
        { from: "1", to: "11", text: "前班主任" },
        { from: "7", to: "12", text: "妹妹" },
        { from: "1", to: "12", text: "帮助" },
        { from: "13", to: "4", text: "班长" },
        { from: "14", to: "4", text: "班长" },
        { from: "14", to: "1", text: "喜欢" },
        { from: "9", to: "13", text: "保健体育(cp)" },
        { from: "1", to: "15", text: "姐姐" },
        { from: "17", to: "16", text: "团长" },
        { from: "17", to: "3", text: "班长" },
        { from: "16", to: "3", text: "班长" },
        { from: "10", to: "18", text: "年级主任" },
        { from: "11", to: "18", text: "年级主任" },
    ],
};
