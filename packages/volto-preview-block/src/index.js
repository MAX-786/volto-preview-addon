import previewSVG from '@plone/volto/icons/link.svg';
import PreviewView from './components/blocks/Preview/View';
import PreviewEdit from './components/blocks/Preview/Edit';

const applyConfig = (config) => {
  config.blocks.blocksConfig.preview = {
    id: 'preview',
    title: 'Preview',
    icon: previewSVG,
    group: 'common',
    view: PreviewView,
    edit: PreviewEdit,
    restricted: false,
    mostUsed: true,
    // blockHasOwnFocusManagement: true,
    sidebarTabId: 'preview',
    sidebarTabLabel: 'Preview',
    sidebarTabIcon: previewSVG,
    security: {
      addPermission: [],
      view: [],
    },
    styles: {
      preview: {
        backgroundColor: 'white',
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      },
    },
  };

  return config;
};

export default applyConfig;
