import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://tinnfdgbdewrqfnyyyqa.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTExMDE0NCwiZXhwIjoxOTU2Njg2MTQ0fQ.AscOY8TQum7oyWlrDebsvez8kdhQ8bjJEquaAr7IiHM"
);
