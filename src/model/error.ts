import {
  PostgrestError as SupabasePostgrestError,
  ApiError as SupabaseApiError,
} from "@supabase/supabase-js";

export class PostgrestError extends Error {
  code: SupabasePostgrestError["code"];
  details: SupabasePostgrestError["details"];
  hint: SupabasePostgrestError["hint"];

  constructor({ message, code, details, hint }: SupabasePostgrestError) {
    super(message);
    this.name = `${code} Error`;
    this.code = code;
    this.details = details;
    this.hint = hint;
  }
}

export class ApiError extends Error {
  status: SupabaseApiError["status"];

  constructor({ message, status }: SupabaseApiError) {
    super(message);
    this.name = `${status} Error`;
    this.status = status;
  }
}
