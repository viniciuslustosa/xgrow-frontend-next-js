import { Course } from '@/@types/course';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Modal } from '@/components/Modal';
import { Select } from '@/components/Select';
import { Upload } from '@/components/Upload';
import CourseService from '@/services/CourseService';
import React from 'react';
import { useForm, Controller, FieldValues } from 'react-hook-form';

const typeOptions = [
  {
    label: "Link Externo",
    value: "EXTERNAL_LINK"
  },
  {
    label: "Área de Aprendizado",
    value: "LEARNING_AREA",
  }
]

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
    <Modal title="Novo curso">
      <div>
          <span className="text-sm text-gray-secondary-70">
              Preencha os campos abaixo para cadastrar um novo curso.
          </span>
      </div>
      <div className="py-3">
          <span className="text-xs">
              Informações do curso
          </span>
          <div>
              
          </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-12 grid-rows-6 gap-x-2 gap-y-0">
            <div className="col-span-12 row-span-1">
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                    <Input
                        {...field}
                        variant="secondary"
                        label="Nome do curso"
                        placeholder="Insira o nome do curso..."
                        type="text" />
                    }
                />
            </div>
            <div className="col-span-12 row-span-1">
                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                    <Input {...field}
                        label="Descrição"
                        variant="secondary"
                        placeholder="Insira uma breve descrição do curso"
                        type="text" />
                    }
                />
            </div>
            <div className="col-span-6 row-span-1">
                <Controller
                    name="type"
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                    <Select
                        {...field}
                        label="Tipo"
                        variant="secondary"
                        options={typeOptions} />
                    }
                />
            </div>
            <div className="col-span-6 row-span-1">
                <Controller
                    name="category"
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                    <Select
                        {...field}
                        label="Categoria"
                        variant="secondary"
                        options={categoryOptions} />
                    }
                />
            </div>
            <div className="col-span-6 row-span-1">
                <Controller
                    name="accessUrl"
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                    <Input {...field}
                        label="Link de acesso"
                        variant="secondary"
                        placeholder="https://"
                        type="text" />
                    }
                />
            </div>
            <div className="col-span-6 row-span-1">
                <Controller
                    name="supportUrl"
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                    <Input {...field}
                        label="Link de suporte"
                        variant="secondary"
                        placeholder="https://"
                        type="text" />
                    }
                />
            </div>
            <div className="col-span-4 row-span-4">
                <Controller
                    name="thumbnail"
                    control={control}
                    defaultValue=""
                    render={({ field }) =>
                    <Upload {...field}
                        label="Imagem do curso"
                        variant="secondary"
                    />
                    }
                />
            </div>
          </div>
          <div className="flex gap-4 justify-end">
            <Button variant="secondary">
                Cancelar
            </Button>
            <Button type="submit">
                Cadastrar curso
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddCourse;