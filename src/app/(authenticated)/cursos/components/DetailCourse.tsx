import { Course } from '@/@types/course';
import { Button } from '@/components/Button';
import { Modal } from '@/components/Modal';
import CourseService from '@/services/CourseService';
import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';
import Image from 'next/image'
import { MoreVert } from '@mui/icons-material';

const styles = {
    root: "rounded-lg bg-black-80 grid grid-cols-12 grid-rows-1 grid-flow-col gap-x-4",
    contentImage: "rounded-lg col-span-3 flex justify-start items-center",
    contentInfo: "md:col-span-9 col-span-8 sm:col-span-9 2xl:col-span-9 text-white flex flex-col justify-start h-full gap-4",
}

const AddCourse = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data: FieldValues) => {
    try {
      CourseService.create({ ...data as Course, thumbnail: "https://i.imgur.com/GlWa2sN.png" })
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal title="Detalhes do curso">
      <div>
          <span className="text-sm text-gray-secondary-70">
              Preencha os campos abaixo para cadastrar um novo curso.
          </span>
      </div>
      <div>
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
                                Título
                            </p>
                        </div>
                        <div className="bg-black-100 rounded p-1">
                            <Button variant="secondary" iconColor="#93BC1E" icon="Help">
                                Suporte
                            </Button>
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
          <div className="flex gap-4 justify-end">
            <Button icon="Delete" variant="error" type="submit">
                Excluir curso
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddCourse;