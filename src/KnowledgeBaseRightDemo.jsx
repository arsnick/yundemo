import React, { useState } from 'react';
import './KnowledgeBaseRightDemo.css';

const knowledgeBases = [
  { key: 'yunqi', name: '云启知识库', desc: '云启相关知识内容', icon: '☁️', list: [
    { title: '云启平台入门指南', date: '2025-07-01', type: 'PDF' },
    { title: '云启架构设计', date: '2025-07-01', type: 'PDF' },
    { title: '云启最佳实践', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'trainee', name: '管培生知识库', desc: '面向管培生的专属知识库', icon: '📚', list: [
    { title: '管培生技术学习路径', date: '2025-07-01', type: 'PDF' },
    { title: '管培生文化学习路径', date: '2025-07-01', type: 'PDF' },
    { title: '管培生管理学习路径', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'techcampus', name: '技术校招知识库', desc: '技术校招相关知识内容', icon: '🎓', list: [
    { title: '校招流程全解', date: '2025-07-01', type: 'PDF' },
    { title: '技术面试题库', date: '2025-07-01', type: 'PDF' },
    { title: '校招经验分享', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'idc', name: 'IDC知识库', desc: 'IDC相关知识内容', icon: '🏢', list: [
    { title: 'IDC基础知识', date: '2025-07-01', type: 'PDF' },
    { title: 'IDC运维手册', date: '2025-07-01', type: 'PDF' },
    { title: 'IDC安全规范', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'highp', name: '高P landing知识库', desc: '高P landing相关知识内容', icon: '🚀', list: [
    { title: '高P landing项目介绍', date: '2025-07-01', type: 'PDF' },
    { title: '高P landing技术方案', date: '2025-07-01', type: 'PDF' },
    { title: '高P landing案例分析', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'feiyun', name: '飞云团知识库', desc: '飞云团相关知识内容', icon: '🪁', list: [
    { title: '飞云团项目介绍', date: '2025-07-01', type: 'PDF' },
    { title: '飞云团技术分享', date: '2025-07-01', type: 'PDF' },
    { title: '飞云团管理制度', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'qingyun', name: '青云营知识库', desc: '青云营相关知识内容', icon: '🌱', list: [
    { title: '青云营技术成长路径', date: '2025-07-01', type: 'PDF' },
    { title: '青云营文化活动', date: '2025-07-01', type: 'PDF' },
    { title: '青云营管理实践', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'manager', name: '管理者专班知识库', desc: '管理者专班相关知识内容', icon: '👔', list: [
    { title: '管理者专班课程体系', date: '2025-07-01', type: 'PDF' },
    { title: '管理者领导力提升', date: '2025-07-01', type: 'PDF' },
    { title: '管理者案例分析', date: '2025-07-01', type: 'PDF' },
  ] },
  { key: 'protrain', name: '专业培训知识库', desc: '专业培训相关知识内容', icon: '🏫', list: [
    { title: '专业技术成长路径', date: '2025-07-01', type: 'PDF' },
    { title: '专业领域研究', date: '2025-07-01', type: 'PDF' },
    { title: '专业管理实践', date: '2025-07-01', type: 'PDF' },
  ] },
];

export default function KnowledgeBaseRightDemo() {
  const [selectedKB, setSelectedKB] = useState(knowledgeBases[0]);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(0);

  return (
    <div className="kb-half-right">
      <div className="demo-label-right">demo2</div>
      <div className="trainee-container trainee-container-with-padding">
        {/* 左侧知识资源区 */}
        <div className="trainee-panel trainee-panel-left">
          <div className="trainee-search-hint">特定知识库搜索框</div>
          <div className="trainee-search-box" style={{position: 'relative'}}>
            <input
              type="text"
              placeholder={`搜索${selectedKB.name}内容...`}
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gap: 8,
            margin: '8px 0',
          }}>
            {knowledgeBases.map((kb, idx) => (
              <button
                key={kb.key}
                style={{
                  border: selectedKB.key === kb.key ? '2px solid #2563eb' : '1px solid #eee',
                  background: selectedKB.key === kb.key ? '#e6f0ff' : '#fff',
                  color: '#222',
                  borderRadius: 8,
                  padding: '4px 12px',
                  fontWeight: selectedKB.key === kb.key ? 'bold' : 'normal',
                  cursor: 'pointer',
                  width: '100%',
                  minWidth: 0,
                  minHeight: 0,
                  boxSizing: 'border-box',
                }}
                onClick={() => {
                  setSelectedKB(kb);
                  setSelected(0);
                  setSearch('');
                }}
              >
                {kb.icon} {kb.name}
              </button>
            ))}
          </div>
          <div className="trainee-list">
            {selectedKB.list
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
            <h2>{selectedKB.list[selected].title}</h2>
            <p>这里是"{selectedKB.list[selected].title}"的详细内容展示区域。可根据实际需求替换为富文本、图片等。</p>
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