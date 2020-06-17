class StringUtils {
    static queryStringify(params = {}) {
      if (!Boolean(params) || typeof params != 'object') return '';
      
      // Query String
      return Object.keys(params).reduce((acc, inc) => (acc + (acc && '&') + inc + '=' + params[inc]).trim(), '');
    }
}

export default StringUtils;