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
import AddCourse from './components/AddCourse';
import Link from 'next/link';
import Image from 'next/image'
import DetailCourse from './components/DetailCourse';

type options = { value: string, label: string };
type Props = {
    searchParams: Record<string, string> | null | undefined;
};

const categoryOptions = [
    {
      label: "Saúde",
      value: "Saúde"
    },
    {
      label: "Programação",
      value: "Programação",
    }
]

const itemsPage: options[] = [3,5,9,12,15,18,21].map(item => { return {
    value: item.toString(),
    label: `${item} por página`,
}})

const CoursesPage: NextPage<Props>  = ({ searchParams }) => {
    const [courses, setCourses] = useState<Course[]>([])
    const showAddModal = searchParams?.add;
    const showDetailModal = searchParams?.detail;

    const getCourses = async () => {
        try {
            const { data } = await ClientService.filter()
            if(data) {
                setCourses(data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getCourses()
    }, []);

    return (
        <div className={styles.root}>
            <div className="h-full">
                <div className={styles.searchBar}>
                    <div className="col-span-2 flex items-center">
                        <span className="font-bold">
                            Meus cursos
                        </span>
                    </div>
                    <div className="grid grid-cols-10 gap-10">
                        <div className="col-span-5 flex gap-4 items-center">
                            <span className="uppercase text-10">
                                Filtrar por categoria:
                            </span>
                            <div className="grow">
                                <Select
                                    icon="Tune"
                                    variant="menu"
                                    options={categoryOptions}
                                ></Select>
                            </div>
                        </div>
                        <div className="col-span-3 flex justify-center items-center">
                            <Input
                                placeholder="Pesquise pelo nome..."
                                icon="Search"
                            ></Input>
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
                            href="?add=true"
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
                    { !courses.length && (
                        <div className="flex flex-col items-center gap-8 col-span-3 my-20">
                            <div>
                                <Image
                                    src="/images/logo_sm.png"
                                    alt="Logo Xgrow"
                                    width={200}
                                    height={200}
                                    />
                            </div>
                            <div className="flex flex-col text-center gap-2">
                                <span className="bg-gray-70 text-lg font-bold">
                                    Você ainda não possui cursos!
                                </span>
                                <span className="text-sm">
                                    Quando você cadastrar novos cursos, eles aparecerão aqui.
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex">
                <div>
                    <Select
                        variant="menu"
                        options={itemsPage}
                    ></Select>
                </div>
                <div>
                    
                </div>
            </div>
            {showAddModal && <AddCourse></AddCourse>}
            {showDetailModal && <DetailCourse></DetailCourse>}
        </div>
    )
}

export default CoursesPage;