import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KnowledgeBaseTrainee.css';

const knowledgeList = [
  { title: '管理者专班课程体系', date: '2025-07-01', type: 'PDF' },
  { title: '管理者领导力提升', date: '2025-07-01', type: 'PDF' },
  { title: '管理者案例分析', date: '2025-07-01', type: 'PDF' },
];

export default function KnowledgeBaseManager({ side }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const isRight = side === 'right';

  return (
    <div className={isRight ? 'trainee-half-right' : 'trainee-half-left'}>
      <button className="trainee-back-btn" onClick={() => navigate(isRight ? '/right' : '/')}>← 返回</button>
      <div className="trainee-container trainee-container-with-padding">
        {/* 左侧知识资源区 */}
        <div className="trainee-panel trainee-panel-left">
          <div className="trainee-search-hint">特定知识库搜索框</div>
          <div className="trainee-search-box" style={{position: 'relative'}}>
            <input
              type="text"
              placeholder={isRight ? "搜索管理者专班知识..." : "搜索管理者专班知识..."}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div className="trainee-list">
            {knowledgeList
              .filter(item => item.title.includes(search))
              .map((item, idx) => (
                <div
                  key={item.title}
                  className={`trainee-list-item${selected === idx ? ' selected' : ''}`}
                  onClick={() => setSelected(idx)}
                >
                  <span className="trainee-pdf">PDF</span>
                  <span className="trainee-title">{item.title}</span>
                  <span className="trainee-date">{item.date}</span>
                </div>
              ))}
          </div>
        </div>
        {/* 中部问答区 */}
        <div className="trainee-panel trainee-panel-center">
          <div className="trainee-qa-header">
            <span className="trainee-qa-icon">💬</span>
            <span className="trainee-qa-title">知识问答</span>
          </div>
          <div className="trainee-qa-content">
            <h2>{knowledgeList[selected].title}</h2>
            <p>这里是"{knowledgeList[selected].title}"的详细内容展示区域。可根据实际需求替换为富文本、图片等。</p>
          </div>
        </div>
        {/* 右侧功能区 */}
        <div className="trainee-panel trainee-panel-right">
          <div className="trainee-func-header">功能区</div>
          <div className="trainee-func-btns">
            <button className="trainee-func-btn blue">生成播客</button>
            <button className="trainee-func-btn green">伴读</button>
            <button className="trainee-func-btn">角色扮演</button>
            <button className="trainee-func-btn">测评</button>
          </div>
          <div className="trainee-func-list">
            <button className="trainee-func-list-btn">添加笔记</button>
            <div className="trainee-func-tags">
              <span>学习指南</span>
              <span>简报文档</span>
              <span>常见问题解答</span>
              <span>时间轴</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 