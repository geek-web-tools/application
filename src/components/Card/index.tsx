/*
 * @Description: your description
 * @Module: module.name
 * @Author: draco
 * @Email: draco.coder@gmail.com
 * @Github: https://github.com/draco-china
 * @Date: 2022-09-05 16:28:03
 * @LastEditTime: 2022-09-05 16:28:03
 */
interface CardProps {
  className?: string;
  title?: string | React.ReactNode;
  children?: React.ReactNode | React.ReactNode[];
}

const Card = ({ title, children, className, ...props }: CardProps) => {
  return (
    <div className={`bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-6 ${className}`} {...props}>
      <p className="font-bold text-md text-black dark:text-white mb-2">{title}</p>
      {children}
    </div>
  );
};
export default Card;
