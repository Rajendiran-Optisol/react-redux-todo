import HttpOptions from './HttpOptions';
import HttpError from './HttpError';
import StringUtil from '../StringUtil';

class HttpUtils {

    static get(url, service, params = {}, auth = true) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.GET }, service, params, auth);
    }

    static post(url, service, params = {}, auth = true) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.POST }, service, params, auth);
    }

    static put(url, service, params = {}, auth = true) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.PUT }, service, params, auth);
    }

    static delete(url, service, params = {}, auth = true) {
        params.query && ( url += StringUtil.queryStringify(params.query));
        delete params.query;

        return HttpUtils.makeCall({ url: url, method: HttpOptions.DELETE }, service, params, auth);
    }

    static async makeCall(config, service, data = {}, auth = true) {
        try {
            let optionsConfig = { ...config, ...data };
            if (auth) {
                let token = localStorage.getItem('token');
                optionsConfig = { ...optionsConfig, headers: { ...config.headers, 'Authorization': token }};
            }
            
            const response = await service(optionsConfig);

            return response;
        }
        catch (ex) {
            console.log(ex.response);
            if (ex.response) {
                if (ex.response.status === 401) {
                    localStorage.removeItem('token');
                    return window.location = '/login';
                }

                return HttpUtils.makeError({ 
                    status: ex.response.status, 
                    error: ex.response.data.error,
                    message: ex.response.data.message,
                    url: ex.request.responseURL || config.url
                });
            }
            else if (ex.request) {
                return HttpUtils.makeError({ 
                    status: ex.request.status, 
                    error: ex.request.statusText,
                    message: ex.request.statusText,
                    url: ex.request.responseURL || config.url
                });
            }

            return HttpUtils.makeError({
                status: 0,
                message: ex.message,
                error: ex.message,
                url: config.url
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