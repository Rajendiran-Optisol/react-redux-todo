import HttpOptions from './HttpOptions';
import HttpError from './HttpError';
import StringUtil from '../StringUtil';

class HttpUtils {

    static get(url, service, params = {}) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.GET }, service, params);
    }

    static post(url, service, params = {}) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.POST }, service, params);
    }

    static put(url, service, params = {}) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.PUT }, service, params);
    }

    static delete(url, service, params = {}) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.DELETE }, service, params);
    }

    static async makeCall(config, service, data = {}) {
        try {
            let optionsConfig = { ...config, ...data };
            const response = await service(optionsConfig);

            return response;
        }
        catch (ex) {
            console.log(ex)
            return HttpUtils.makeError({ 
                status: ex.response.status, 
                error: ex.response.data.error,
                message: ex.response.data.message,
                url: ex.request.responseURL || config.url
            });
        }
    }

    static makeError(responseError, config) {
        const error = new HttpError();
        error.status = responseError.status;
        error.message = responseError.message;
        error.error = responseError.error;
        error.uri = responseError.url || config.url;

        return error;
    }
}

export default HttpUtils;