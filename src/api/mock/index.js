import { http } from "@/utils/http/index.js";

export function getListApi(params) {
  return http.request({
    url: "/list/get",
    method: "get",
    params
  });
}

export function getListApiError(data) {
  return http.request({
    url: "/list/error",
    method: "post",
    data
  });
}
