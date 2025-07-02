import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './KnowledgeBaseTrainee.css';

const knowledgeList = [
  { title: '青云营技术成长路径', date: '2025-07-01', type: 'PDF' },
  { title: '青云营文化活动', date: '2025-07-01', type: 'PDF' },
  { title: '青云营管理实践', date: '2025-07-01', type: 'PDF' },
];

export default function KnowledgeBaseQingyun({ side }) {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const isRight = side === 'right';

  // 判断是否需要显示"青云营知识库"联想
  const qingyunRelated = search.includes('青云营');

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
              placeholder={isRight ? "搜索青云营知识..." : "搜索青云营知识..."}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {qingyunRelated && (
              <div
                className="kb-suggestion"
                style={{top: 44, left: 0, right: 0, position: 'absolute'}}
                onClick={() => navigate(isRight ? '/right/qingyun' : '/qingyun')}
              >
                青云营知识库
              </div>
            )}
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