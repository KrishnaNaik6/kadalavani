export function paginationParamParser(req) {
  return { limit: req.params.limit || 10, skip: req.params.skip || 0 };
}
