import { Button } from '../Button';
import styles from './Card.module.css';
import Image from 'next/image'
import Icon from '@/icons';
import { Course } from '@/@types/course';
import Link from 'next/link';
import { Dropdown } from '../Dropdown';
import { useState } from 'react';

interface Props {
    course: Course
}

export function Card({ course }: Props) {
    const [dropDown, setDropdown] = useState(false);

    const toggleDropdown = () => {
        setDropdown(!dropDown);
    };
    return (
        <div className={styles.root}>
            <div className={styles.contentImage}>
                <Image
                    src={course.thumbnail}
                    alt="XGROW"
                    width={134}
                    height={134}
                />
            </div>
            <div className={styles.contentInfo}>
                <div className="flex flex-row justify-between">
                    <div>
                        <p className="font-normal">
                            { course.name }
                        </p>
                    </div>
                    <div className="bg-black-100 rounded p-1 flex">
                        <Button onClick={() => toggleDropdown()} variant="icon">
                            <Icon size={20} name="MoreVert"></Icon>
                        </Button>
                        <Dropdown setIsOpen={setDropdown} isOpen={dropDown}>
                            <Link
                                href={`?detail=${course.id}`}
                            >
                                <Button
                                    variant="dropdown"
                                    iconColor="#93BC1E"
                                    icon="Visibility">
                                    Ver detalhes
                                </Button>
                            </Link>
                            <Link
                                target="_blank"
                                href={course.supportUrl}
                            >
                                <Button
                                    variant="dropdown"
                                    iconColor="#93BC1E"
                                    icon="Help">
                                    Suporte
                                </Button>
                            </Link>
                        </Dropdown>
                    </div>
                </div>
                <div className="flex flex-row items-center md:divide-x md:divide-gray-600 text-gray-secondary-70">
                    <div className="pr-3 text-gray-secondary-70">
                        <p className="text-xs ">
                            Tipo: { course.type }
                        </p>
                    </div>
                    <div className="pl-3">
                        <p className="text-xs font-thin bg-black-60 py-1 px-2 rounded-md">
                            { course.category }
                        </p>
                    </div>
                </div>
                <div>
                    <Link target="_blank" href={course.accessUrl} passHref >
                        <Button
                            icon={course.type == 'LEARNING_AREA' ? 'PlayCircle' : 'OpenInNew'} className="w-full">
                            { course.type === 'LEARNING_AREA' ? 'Acessar área de aprendizagem' : 'Acessar conteúdo' }
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
      );
    };