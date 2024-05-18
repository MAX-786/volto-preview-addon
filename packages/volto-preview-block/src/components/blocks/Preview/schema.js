import { defineMessages } from 'react-intl';

const messages = defineMessages({
  PreviewBlock: {
    id: 'Preivew Block',
    defaultMessage: 'Preivew Block',
  },
  title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  previewURL: {
    id: 'URL',
    defaultMessage: 'URL',
  },
  align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  width: {
    id: 'Width',
    defaultMessage: 'Width',
  },
  height: {
    id: 'Height',
    defaultMessage: 'Height',
  },
  styleFieldset: {
    id: 'Style',
    defaultMessage: 'Style',
  },
});

export const previewSchema = (props) => {
  return {
    title: props.intl.formatMessage(messages.PreviewBlock),
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['title', 'url'],
      },
      {
        id: 'style',
        title: props.intl.formatMessage(messages.styleFieldset),
        fields: ['align', 'width', 'height'],
      },
    ],
    properties: {
      title: {
        title: props.intl.formatMessage(messages.title),
      },
      url: {
        title: props.intl.formatMessage(messages.previewURL),
        widget: 'url',
      },
      align: {
        title: props.intl.formatMessage(messages.align),
        widget: 'align',
        actions: ['left', 'right', 'center'],
      },
      width: {
        title: props.intl.formatMessage(messages.width),
      },
      height: {
        title: props.intl.formatMessage(messages.height),
      },
    },
    required: [],
  };
};
