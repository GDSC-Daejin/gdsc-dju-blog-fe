export interface RefreshResponse {
  header: {
    code: number;
    message: string;
  };
  body: {
    data: { token: string };
  };
}
