import React, { useState } from 'react';
import './KnowledgeBaseLeftDemo.css';
import { useNavigate } from 'react-router-dom';

const knowledgeBases = [
  { key: 'yunqi', name: '云启知识库', desc: '云启相关知识内容', icon: '☁️' },
  { key: 'trainee', name: '管培生知识库', desc: '面向管培生的专属知识库', icon: '📚' },
  { key: 'techcampus', name: '技术校招知识库', desc: '技术校招相关知识内容', icon: '🎓' },
  { key: 'idc', name: 'IDC知识库', desc: 'IDC相关知识内容', icon: '🏢' },
  { key: 'highp', name: '高P landing知识库', desc: '高P landing相关知识内容', icon: '🚀' },
  { key: 'feiyun', name: '飞云团知识库', desc: '飞云团相关知识内容', icon: '🪁' },
  { key: 'qingyun', name: '青云营知识库', desc: '青云营相关知识内容', icon: '🌱' },
  { key: 'manager', name: '管理者专班知识库', desc: '管理者专班相关知识内容', icon: '👔' },
  { key: 'protrain', name: '专业培训知识库', desc: '专业培训相关知识内容', icon: '🏫' },
];

export default function KnowledgeBaseLeftDemo() {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  // 判断是否需要显示联想小方框
  const traineeRelated = search.includes('管培生');
  const qingyunRelated = search.includes('青云营');
  const professionalRelated = search.includes('专业');

  // 路由映射
  const routeMap = {
    yunqi: '/yunqi',
    trainee: '/trainee',
    techcampus: '/techcampus',
    idc: '/idc',
    highp: '/highp',
    feiyun: '/feiyun',
    qingyun: '/qingyun',
    manager: '/manager',
    protrain: '/protrain',
    professional: '/professional',
  };

  return (
    <div className="kb-half-left">
      <div className="demo-label-left">demo1（现状）</div>
      <div className="kb-page-center">
        <div className="kb-main-content">
          <div className="kb-top-section">
            <div className="kb-top-hint-box" style={{ color: '#d00' }}>
              首页为全局搜索框，进入任意知识库页面中仍有该知识库搜索框，用户难以感知二者差别。
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
          </div>
          <div className="kb-bottom-section">
            <div className="kb-list-grid">
              {knowledgeBases.map(kb => (
                <div
                  key={kb.key}
                  className="kb-item-vertical"
                  onClick={() => navigate(routeMap[kb.key] || '/')}
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
    </div>
  );
} 