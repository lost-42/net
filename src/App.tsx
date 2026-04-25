import React, { useState, useEffect } from "react";
import "./App.scss";
import RelationGraph from "./slot";
import cityData from "./city/data";
import danmachiData from "./danmachi/data";

// 作品数据接口
interface WorkData {
    id: string;
    name: string;
    link?: string; // 作品链接
    data: any; // 实际的关系图数据
}

// 可用作品列表
const works: WorkData[] = [
    {
        id: "city",
        name: "小城日常",
        link: "https://bgm.tv/subject/514358",
        data: cityData,
    },
    {
        id: "danmachi",
        name: "在地下城寻求邂逅是否搞错了什么",
        link: "https://bgm.tv/subject/116287",
        data: danmachiData,
    },
];

const App: React.FC = () => {
    const [selectedWork, setSelectedWork] = useState<string>("city");
    const [currentWorkData, setCurrentWorkData] = useState<any>(cityData);

    // 处理作品选择
    const handleWorkSelect = (workId: string) => {
        setSelectedWork(workId);
        const work = works.find((w) => w.id === workId);
        if (work) {
            setCurrentWorkData(work.data || null);
        }
    };

    // 处理logo点击，回到第一个作品
    const handleLogoClick = () => {
        if (works.length > 0) {
            handleWorkSelect(works[0].id);
        }
    };

    // 初始化：默认选中第一个作品
    useEffect(() => {
        if (works.length > 0 && !selectedWork) {
            handleWorkSelect(works[0].id);
        }
    }, []);

    return (
        <div className="app-container">
            {/* 侧边栏 */}
            <div className="sidebar">
                {/* Logo区域 */}
                <div className="logo-container" onClick={handleLogoClick}>
                    <div className="logo">
                        <span className="logo-icon">📚</span>
                        <span className="logo-text">人物关系图</span>
                    </div>
                    <div className="logo-subtitle">Character Relationship Graph</div>
                </div>

                {/* 作品列表 */}
                <div className="works-list">
                    <h3 className="works-list-title">作品列表</h3>
                    <div className="works-items">
                        {works.map((work) => (
                            <div
                                key={work.id}
                                className={`work-item ${selectedWork === work.id ? "active" : ""}`}
                                onClick={() => handleWorkSelect(work.id)}
                            >
                                <div className="work-item-icon">📺</div>
                                <div className="work-item-content">
                                    <div className="work-item-name">{work.name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 侧边栏底部信息 */}
                <div className="sidebar-footer">
                    <div className="current-work-info">
                        <span className="current-work-label">当前作品:</span>
                        <span className="current-work-name">
                            {works.find((w) => w.id === selectedWork)?.name || "未选择"}
                        </span>
                    </div>
                    <div className="total-works">共 {works.length} 个作品</div>
                </div>
            </div>

            {/* 主内容区 */}
            <div className="main-content">
                <div className="main-content-header">
                    <h1 className="work-title">{works.find((w) => w.id === selectedWork)?.name || "人物关系图"}</h1>
                    <div className="work-link-text">
                        {works.find((w) => w.id === selectedWork)?.link ? (
                            <a
                                href={works.find((w) => w.id === selectedWork)?.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {works.find((w) => w.id === selectedWork)?.link}
                            </a>
                        ) : (
                            "点击左侧作品查看人物关系图"
                        )}
                    </div>
                </div>

                <div className="graph-container">
                    {currentWorkData ? (
                        <RelationGraph customData={currentWorkData} />
                    ) : (
                        <div className="no-data-message">
                            该作品数据正在准备中...
                            <div className="no-data-hint">请选择其他作品查看</div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
