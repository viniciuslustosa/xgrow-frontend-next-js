"use client";

import { Course } from "@/@types/course";
import api, { defaults } from "../config/api";

interface Courses { meta: any, data: Course[] }

export default class ClientService {
    static async getById(id: string): Promise<Course> {
        const { data: client } = await api.get<Course>(
            `courses/${id}`,
            {
                headers: defaults.headers
            }
        );
      
        return client;
    }

    static async filter(query?: any): Promise<{ meta: any, data: Course[] }> {
        const { data } = await api.get<Courses>(
            'courses',
            {
                params: query,
                headers: defaults.headers
            }
        );
      
        return data;
    }

    static async create(data: Course) {
        const { data: client } = await api.post<Course>(
            `courses`,
            data,
            {
                headers: defaults.headers
            }
        );
      
        return client;
    }
}