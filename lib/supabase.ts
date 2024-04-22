export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      achievement: {
        Row: {
          certificate_url: string | null
          created_at: string
          date: string | null
          description: string | null
          id: number
          title: string | null
          user_id: string | null
        }
        Insert: {
          certificate_url?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Update: {
          certificate_url?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_achievement_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      city: {
        Row: {
          city_name: string | null
          created_at: string
          id: number
          state_name: string | null
        }
        Insert: {
          city_name?: string | null
          created_at?: string
          id?: number
          state_name?: string | null
        }
        Update: {
          city_name?: string | null
          created_at?: string
          id?: number
          state_name?: string | null
        }
        Relationships: []
      }
      college_courses: {
        Row: {
          course_duration: number | null
          course_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          course_duration?: number | null
          course_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          course_duration?: number | null
          course_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      college_names: {
        Row: {
          college_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          college_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          college_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      college_specialization: {
        Row: {
          created_at: string
          id: number
          specialization_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          specialization_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          specialization_name?: string | null
        }
        Relationships: []
      }
      college_university: {
        Row: {
          created_at: string
          id: number
          university_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          university_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          university_name?: string | null
        }
        Relationships: []
      }
      curricular: {
        Row: {
          category_id: number | null
          certificate_url: string | null
          created_at: string
          date: string | null
          description: string | null
          id: number
          "title ": string | null
          user_id: string | null
        }
        Insert: {
          category_id?: number | null
          certificate_url?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          id?: number
          "title "?: string | null
          user_id?: string | null
        }
        Update: {
          category_id?: number | null
          certificate_url?: string | null
          created_at?: string
          date?: string | null
          description?: string | null
          id?: number
          "title "?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_curricular _user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_curricular_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "curricular_category"
            referencedColumns: ["id"]
          },
        ]
      }
      curricular_category: {
        Row: {
          category_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          category_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          category_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      school_board: {
        Row: {
          board_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          board_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          board_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      school_names: {
        Row: {
          created_at: string
          id: number
          school_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          school_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          school_name?: string | null
        }
        Relationships: []
      }
      user_college_details: {
        Row: {
          city_id: number | null
          college_courses_id: number | null
          college_name_id: number | null
          college_specialization_id: number | null
          college_university_id: number | null
          created_at: string
          from_date: string | null
          id: number
          to_data: string | null
          user_id: string | null
        }
        Insert: {
          city_id?: number | null
          college_courses_id?: number | null
          college_name_id?: number | null
          college_specialization_id?: number | null
          college_university_id?: number | null
          created_at?: string
          from_date?: string | null
          id?: number
          to_data?: string | null
          user_id?: string | null
        }
        Update: {
          city_id?: number | null
          college_courses_id?: number | null
          college_name_id?: number | null
          college_specialization_id?: number | null
          college_university_id?: number | null
          created_at?: string
          from_date?: string | null
          id?: number
          to_data?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_college_details_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "city"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_college_details_college_courses_id_fkey"
            columns: ["college_courses_id"]
            isOneToOne: false
            referencedRelation: "college_courses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_college_details_college_name_id_fkey"
            columns: ["college_name_id"]
            isOneToOne: false
            referencedRelation: "college_names"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_college_details_college_specialization_id_fkey"
            columns: ["college_specialization_id"]
            isOneToOne: false
            referencedRelation: "college_specialization"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_college_details_college_university_id_fkey"
            columns: ["college_university_id"]
            isOneToOne: false
            referencedRelation: "college_university"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_college_details_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_role: {
        Row: {
          created_at: string
          id: number
          is_active: boolean | null
          user_role_name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_active?: boolean | null
          user_role_name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_active?: boolean | null
          user_role_name?: string | null
        }
        Relationships: []
      }
      user_school_details: {
        Row: {
          city_id: number | null
          created_at: string
          grade: string | null
          id: number
          school_board_id: number | null
          school_name_id: number | null
          user_id: string | null
        }
        Insert: {
          city_id?: number | null
          created_at?: string
          grade?: string | null
          id?: number
          school_board_id?: number | null
          school_name_id?: number | null
          user_id?: string | null
        }
        Update: {
          city_id?: number | null
          created_at?: string
          grade?: string | null
          id?: number
          school_board_id?: number | null
          school_name_id?: number | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_school_details_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "city"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_school_details_school_board_id_fkey"
            columns: ["school_board_id"]
            isOneToOne: false
            referencedRelation: "school_board"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_school_details_school_name_id_fkey"
            columns: ["school_name_id"]
            isOneToOne: false
            referencedRelation: "school_names"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_school_details_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      user_secondary_details: {
        Row: {
          city_id: number | null
          contact_number: number | null
          created_at: string
          date_of_birth: string | null
          first_name: string | null
          gender: string | null
          id: number
          last_name: string | null
          user_id: string | null
          user_role_id: number | null
        }
        Insert: {
          city_id?: number | null
          contact_number?: number | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          user_id?: string | null
          user_role_id?: number | null
        }
        Update: {
          city_id?: number | null
          contact_number?: number | null
          created_at?: string
          date_of_birth?: string | null
          first_name?: string | null
          gender?: string | null
          id?: number
          last_name?: string | null
          user_id?: string | null
          user_role_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_basic_details_city_id_fkey"
            columns: ["city_id"]
            isOneToOne: false
            referencedRelation: "city"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_basic_details_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_basic_details_user_role_id_fkey"
            columns: ["user_role_id"]
            isOneToOne: false
            referencedRelation: "user_role"
            referencedColumns: ["id"]
          },
        ]
      }
      user_work_experience: {
        Row: {
          company_id: number | null
          company_type_id: number | null
          created_at: string
          designation_id: number | null
          id: number
          tenure: string | null
          user_id: string | null
          work_bio: string | null
        }
        Insert: {
          company_id?: number | null
          company_type_id?: number | null
          created_at?: string
          designation_id?: number | null
          id?: number
          tenure?: string | null
          user_id?: string | null
          work_bio?: string | null
        }
        Update: {
          company_id?: number | null
          company_type_id?: number | null
          created_at?: string
          designation_id?: number | null
          id?: number
          tenure?: string | null
          user_id?: string | null
          work_bio?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_user_work_experience_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "work_company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_work_experience_company_type_id_fkey"
            columns: ["company_type_id"]
            isOneToOne: false
            referencedRelation: "work_company_type"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_user_work_experience_designation_id_fkey"
            columns: ["designation_id"]
            isOneToOne: false
            referencedRelation: "work_designation"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_work_experience_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users_basic_details: {
        Row: {
          created_at: string | null
          display_name: string | null
          email: string | null
          id: string
          password: string | null
        }
        Insert: {
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          password?: string | null
        }
        Update: {
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          id?: string
          password?: string | null
        }
        Relationships: []
      }
      work_company: {
        Row: {
          company_name: string | null
          created_at: string
          id: number
        }
        Insert: {
          company_name?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          company_name?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      work_company_type: {
        Row: {
          company_type: string | null
          created_at: string
          id: number
        }
        Insert: {
          company_type?: string | null
          created_at?: string
          id?: number
        }
        Update: {
          company_type?: string | null
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      work_designation: {
        Row: {
          created_at: string
          designation_name: string | null
          designation_type: string | null
          id: number
        }
        Insert: {
          created_at?: string
          designation_name?: string | null
          designation_type?: string | null
          id?: number
        }
        Update: {
          created_at?: string
          designation_name?: string | null
          designation_type?: string | null
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
