"use client";

import { Card } from '@/components/Card';
import { NextPage } from 'next'
import styles from './Cursos.module.css';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Course } from '@/@types/course';
import { Select } from '@/components/Select';
import ClientService from '@/services/CourseService';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Modal } from '@/components/Modal';
import AddCourse from './components/AddCourse';

type Props = {
    searchParams: Record<string, string> | null | undefined;
};

const CoursesPage: NextPage<Props>  = ({ searchParams }) => {
    const [courses, setCourses] = useState<Course[]>([])
    const showModal = searchParams?.newcourse;

    const getCourses = async () => {
        const { data } = await ClientService.filter()
        if(data) {
            setCourses(data)
        }
    }

    useEffect(() => {
        getCourses()
    }, [])

    return (
        <div className={styles.root}>
            <div>
                <div className={styles.searchBar}>
                    <div className="col-span-2 flex items-center">
                        <span className="font-bold">
                            Meus cursos
                        </span>
                    </div>
                    <div className="col-span-8 grid grid-cols-8">
                        <div className="col-span-3 flex gap-4 items-center">
                            <span className="uppercase text-xs">
                                Filtrar por categoria:
                            </span>
                            <div>
                                <Input></Input>
                            </div>
                        </div>
                        <div className="col-span-3 flex items-center">
                            <Input placeholder="Pesquise pelo nome..." icon="Search"></Input>
                        </div>
                        <div className="col-span-2 flex items-center justify-start">
                            <span className="font-light text-xs">
                                Visualização:
                            </span>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <Link
                            href="?newcourse=true"
                        >
                            <Button icon="Add">
                                Novo curso
                            </Button>
                        </Link>
                    </div>
                </div>
                <div className={styles.cards}>
                    { courses && courses.map((course) => (
                        <div key={course.id}>
                            <Card type="video" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex">
                <div>
                    <Select options={[{ label: 'Teste', value: 'teste'}]}></Select>
                </div>
                <div>
                    
                </div>
            </div>
            {showModal &&
                <AddCourse></AddCourse>
            }
        </div>
    )
}

export default CoursesPage;