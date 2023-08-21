"use client";

import { Card } from '@/components/Card';
import { NextPage } from 'next'
import styles from './Cursos.module.css';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Course } from '@/@types/course';
import { Select } from '@/components/Select';
import ClientService from '@/services/CourseService';
import { useCallback, useEffect, useState } from 'react';
import AddCourse from './components/AddCourse';
import Link from 'next/link';
import Image from 'next/image'
import DetailCourse from './components/DetailCourse';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Paginator } from '@/components/Paginator';

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

const itemsPage: options[] = [10,15,20,30].map(item => { return {
    value: item.toString(),
    label: `${item} por página`,
}})

const CoursesPage: NextPage<Props>  = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [totalPages, setTotalPages] = useState<number>(1);
    const searchParams = useSearchParams()!
    const showAddModal = searchParams.get('add');
    const showDetailModal = searchParams.get('detail');

    const getCourses = async () => {
        try {
            setLoading(true);
            const { data, meta } = await ClientService.filter({ limit: itemsPerPage, page: selectedPage });
            if(data) {
                setCourses(data)
            }

            setTotalPages(meta.totalPages)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    const getSelectedCourse = () => courses.filter(course => course.id === showDetailModal)[0]

    useEffect(() => {
        getCourses()
    }, [itemsPerPage, selectedPage]);

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
                    { !loading && courses && courses.map((course) => (
                        <div key={course.id}>
                            <Card course={course} />
                        </div>
                    ))}
                    {  !loading && !courses.length && (
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
            <div className="flex justify-between">
                <div>
                    <Select
                        onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
                        variant="menu"
                        options={itemsPage}
                    ></Select>
                </div>
                <div>
                    <Paginator pages={totalPages} selectedPage={selectedPage || 1} setPage={setSelectedPage} />
                </div>
            </div>
            {showAddModal && <AddCourse></AddCourse>}
            {showDetailModal && <DetailCourse course={getSelectedCourse()}></DetailCourse>}
        </div>
    )
}

export default CoursesPage;