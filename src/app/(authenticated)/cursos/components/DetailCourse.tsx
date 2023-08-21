import React from 'react';
import Image from 'next/image'
import { Course } from '@/@types/course';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import { NextPage } from 'next';
import Link from 'next/link';

const styles = {
    root: "rounded-lg bg-black-80 grid grid-cols-12 grid-rows-1 grid-flow-col gap-x-4",
    contentImage: "rounded-lg col-span-3 flex justify-start items-center",
    contentInfo: "md:col-span-9 col-span-8 sm:col-span-9 2xl:col-span-9 text-white flex flex-col justify-start h-full gap-4",
}

type Props = {
    course?: Course;
};

const DetailCourse: NextPage<Props> = ({ course }) => {

  return (
    <Modal title="Detalhes do curso">
      <div>
        <div className="flex flex-col gap-3 divide-y divide-slate-600">
            <div>
                <div className={styles.root}>
                    <div className={styles.contentImage}>
                        <Image
                            src="/images/img.png"
                            alt="XGROW"
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={styles.contentInfo}>
                        <div className="flex flex-row justify-between">
                            <div>
                                <p className="font-normal">
                                    { course?.name }
                                </p>
                            </div>
                            <div className="bg-black-100 rounded p-1">
                                <Link target="_blank" href={course?.supportUrl ?? '#'} passHref>
                                    <Button variant="dropdown" iconColor="#93BC1E" icon="Help">
                                        Suporte
                                    </Button>
                                </Link>
                            </div>
                        </div>
                        <div className="flex flex-col text-gray-secondary-70">
                            <div className="text-gray-secondary-70">
                                <p className="text-xs uppercase text-gray-500 text-10">
                                    Autor
                                </p>
                            </div>
                            <div>
                                <p className="text-xs font-thin py-1 rounded-md">
                                    Jhon Doe
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-3 pt-4">
                    <div className="col-span-6 flex flex-col gap-2 bg-black-60 rounded-lg p-2">
                        <span className="uppercase text-xs text-black-50">
                            Descrição
                        </span>
                        <span className="font-light text-xs overflow-auto max-h-28">
                            { course?.description }
                        </span>
                    </div>
                    <div className="col-span-6 flex flex-col gap-2 bg-black-60 rounded-lg p-2">
                        <span className="uppercase text-xs text-black-50">
                            Detalhes
                        </span>
                        <div className="flex flex-col text-xs gap-2 divide-y divide-slate-500">
                            <div className="flex justify-between">
                                <span>
                                    Categoria
                                </span>
                                <span>
                                    { course?.category }
                                </span>
                            </div>
                            <div className="flex justify-between pt-2">
                                <span>
                                    Tipo
                                </span>
                                <span>
                                    { course?.type }
                                </span>
                            </div>
                            <div className="flex justify-between pt-2">
                                <span>
                                    Data de cadastro
                                </span>
                                <span>
                                    { course?.createdAt }
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 flex gap-4 justify-end">
                        <div>
                            <Button icon="Delete" variant="error">
                                Excluir curso
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-end pt-3">
                <div>
                    <Button variant="primary">
                        Voltar para minhas compras
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default DetailCourse;