import React from 'react';
import { SidebarPortal } from '@plone/volto/components';
import PreivewData from './Data';

const PreviewEdit = (props) => {
  const { data, block, onChangeBlock, selected, blocksConfig } = props;

  return (
    <>
      <div>
        <h2>{data?.url}</h2>
      </div>
      <SidebarPortal selected={selected}>
        <PreivewData
          data={data}
          block={block}
          onChangeBlock={onChangeBlock}
          blocksConfig={blocksConfig}
        />
      </SidebarPortal>
    </>
  );
};

export default PreviewEdit;
