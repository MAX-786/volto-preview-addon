import React from 'react';

function isNumeric(str) {
  if (typeof str != 'string') return false;
  return !isNaN(str) && !isNaN(parseFloat(str));
}

const PreviewView = (props) => {
  const { data } = props;
  const style = {
    border: 'solid black 2px',
    width: isNumeric(data.width) ? `${data.width}px` : '560px',
    height: isNumeric(data.height) ? `${data.height}px` : '315px',
  };
  const st = {};
  if (data?.align === 'center') {
    st.margin = '10px auto';
    st.width = 'fit-content';
  } else {
    st.float = data?.align;
    st.margin = '10px';
  }

  return (
    <div style={st}>
      <iframe
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
        title={data.title}
        src={data?.url}
        style={style}
      />
    </div>
  );
};

export default PreviewView;
