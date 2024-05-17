import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Preview: {
    id: 'PreivewBlock',
    defaultMessage: 'PreivewBlock',
  },
  previewURL: {
    id: 'URL',
    defaultMessage: 'URL',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  size: {
    id: 'Size',
    defaultMessage: 'Size',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const previewSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.Preview),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'size'],
      },
    ],
    properties: {
      title: {
        title: props.intl.formatMessage(messages.previewURL),
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
      size: {
        title: props.intl.formatMessage(messages.size),
        widget: 'image_size',
      },
    },
    required: [],
  };
};
