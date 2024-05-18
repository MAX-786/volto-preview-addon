import React from 'react';

const PreviewView = (props) => {
  const { data } = props;
  return (
    <div>
      <iframe
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title={data.title}
        src={data?.url}
        style={{ border: 'none', width: '560px', height: '315px' }}
      />
    </div>
  );
};

export default PreviewView;
