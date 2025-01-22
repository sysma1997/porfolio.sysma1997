// https://developers.google.com/drive/api/quickstart/js?hl=es&form=MG0AV3#authorize_credentials_for_a_web_application

declare const gapi: gapi | undefined;
declare const google: google | undefined;

export interface GoogleDrive {
    client_id: string,
    api_key: string,
    discovery_doc: string,
    scopes: string,

    tokenClient?: any,
    gapiInited: boolean,
    googleInited: boolean
}
export interface gapi {
    load: (api: string, callback: () => void) => void;
    client: {
        init: (config: {
            apiKey: string,
            discoveryDocs: Array<string>
        }) => Promise<void>;

        setToken(token: string): void;
        getToken(): any;

        drive: {
            files: {
                list(config: {
                    fields: string, 
                    q?: string
                    pageSize?: number,
                }): Promise<any>;
                get(config: {
                    fileId: string,
                    fields?: string
                }): Promise<any>;
                download(config: {
                    fileId: string
                }): Promise<any>;
            }
        }
    }
}
export interface google {
    accounts: {
        oauth2: {
            initTokenClient: (config: {
                client_id: string,
                scope: string,
                callback?: (response: any) => void | string
            }) => any;
            revoke: (token: string) => void;
        }
    }
}