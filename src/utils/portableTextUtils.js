// utils/portableTextUtils.js
export const extractPlainText = (portableText) => {
    if (!portableText) return '';
  
    let plainText = '';
  
    const processBlock = (block) => {
      if (block._type === 'block' && block.children) {
        block.children.forEach(child => {
          if (child._type === 'span' && child.text) {
            plainText += child.text + ' ';
          }
        });
      }
    };
  
    const processPortableText = (data) => {
      if (Array.isArray(data)) {
        data.forEach(item => {
          if (item._type === 'block') {
            processBlock(item);
          } else if (Array.isArray(item)) {
            processPortableText(item);
          }
        });
      } else if (typeof data === 'object') {
        Object.values(data).forEach(value => {
          if (Array.isArray(value)) {
            processPortableText(value);
          }
        });
      }
    };
  
    processPortableText(portableText);
    return plainText.trim();
  };
  