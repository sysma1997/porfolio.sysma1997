// https://developers.google.com/drive/api/quickstart/js?hl=es&form=MG0AV3#authorize_credentials_for_a_web_application

declare const gapi: gapi | undefined;
declare const google: google | undefined;

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
                    pageSize: number,
                    fields: string
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
                callback?: (response: any) => void
            }) => any;
        }
    }
}