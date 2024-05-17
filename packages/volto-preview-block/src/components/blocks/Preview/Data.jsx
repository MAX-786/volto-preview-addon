import React from 'react';
import { BlockDataForm } from '@plone/volto/components';
import { useIntl } from 'react-intl';

const PreviewData = (props) => {
  const { data, block, onChangeBlock, blocksConfig, navRoot, contentType } =
    props;
  const intl = useIntl();
  const schema = blocksConfig.preview.blockSchema({
    ...props,
    intl,
  });
  const onChangeField = (id, value) => {};

  return (
    <BlockDataForm
      schema={schema}
      title={schema.title}
      onChangeField={onChangeField}
      onChangeBlock={onChangeBlock}
      formData={data}
      block={block}
      blocksConfig={blocksConfig}
      navRoot={navRoot}
      contentType={contentType}
    />
  );
};

export default PreviewData;
