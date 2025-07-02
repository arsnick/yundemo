import React, { useState } from 'react';
import './KnowledgeBaseLeftDemo.css';
import { useNavigate } from 'react-router-dom';

const knowledgeBases = [
  {
    key: 'trainee',
    name: '管培生知识库',
    desc: '面向管培生的专属知识库',
    icon: '📚',
  },
  {
    key: 'qingyun',
    name: '青云营知识库',
    desc: '青云营相关知识内容',
    icon: '🌱',
  },
  {
    key: 'professional',
    name: '专业知识库',
    desc: '专业领域知识库',
    icon: '💡',
  },
];

export default function KnowledgeBaseLeftDemo() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // 判断是否需要显示联想小方框
  const traineeRelated = search.includes('管培生');
  const qingyunRelated = search.includes('青云营');
  const professionalRelated = search.includes('专业');

  return (
    <div className="kb-half-left">
      <div className="demo-label-left">demo1（现状）</div>
      <div className="kb-page-center">
        <div className="kb-main-content">
          <div className="kb-top-hint-box">
            首页搜索框为全局搜索框，进入特定知识库页面中有该知识库的的搜索框。用户难以感知二者差别。
          </div>
          <div className="kb-search-bar" style={{position: 'relative'}}>
            <input
              type="text"
              placeholder="搜索知识库内容..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            {traineeRelated && (
              <div
                className="kb-suggestion"
                style={{top: 44, left: 0, right: 0, position: 'absolute'}}
                onClick={() => navigate('/trainee')}
              >
                管培生知识库
              </div>
            )}
            {qingyunRelated && (
              <div
                className="kb-suggestion"
                style={{top: traineeRelated ? 84 : 44, left: 0, right: 0, position: 'absolute'}}
                onClick={() => navigate('/qingyun')}
              >
                青云营知识库
              </div>
            )}
            {professionalRelated && (
              <div
                className="kb-suggestion"
                style={{top: traineeRelated && qingyunRelated ? 124 : (traineeRelated || qingyunRelated) ? 84 : 44, left: 0, right: 0, position: 'absolute'}}
                onClick={() => navigate('/professional')}
              >
                专业知识库
              </div>
            )}
          </div>
          <div className="kb-list-horizontal">
            {knowledgeBases.map(kb => (
              <div
                key={kb.key}
                className="kb-item-vertical"
                onClick={() => {
                  if (kb.key === 'trainee') navigate('/trainee');
                  else if (kb.key === 'qingyun') navigate('/qingyun');
                  else if (kb.key === 'professional') navigate('/professional');
                }}
              >
                <div className="kb-icon">{kb.icon}</div>
                <div className="kb-info">
                  <div className="kb-title">{kb.name}</div>
                  <div className="kb-desc">{kb.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="kb-bottom-hint-box">
            单击任意知识库进入该知识库页面。
          </div>
        </div>
      </div>
    </div>
  );
} 