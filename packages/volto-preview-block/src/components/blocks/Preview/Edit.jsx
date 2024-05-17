import React from 'react';
import PreviewView from './View';
import { SidebarPortal } from '@plone/volto/components';
import PreivewData from './Data';

const PreviewEdit = (props) => {
  const { data, block, onChangeBlock, selected, blocksConfig } = props;

  return (
    <>
      <PreviewView {...props} />
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
