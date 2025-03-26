import React from "react";
import { Button, ButtonProps } from "antd";

type ButtonType = "primary" | "default" | "dashed" | "link" | "text" | "danger" | "plain";
type ButtonShape = "default" | "circle" | "round";
type ButtonSize = "small" | "middle" | "large";
type HtmlType = "button" | "submit" | "reset";

interface CustomButtonProps extends Omit<ButtonProps, "type" | "size"> {
  type?: ButtonType;
  shape?: ButtonShape;
  size?: ButtonSize;
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon?: React.ReactNode;
  danger?: boolean;
  className?: string;
  style?: React.CSSProperties;
  htmlType?: HtmlType;
  name?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type = "",
  shape = "default",
  size = "middle",
  block = false,
  loading = false,
  disabled = false,
  children,
  onClick,
  icon,
  danger = false,
  className = "",
  style,
  htmlType,
  name = "",
  ...restProps
}) => {
  const baseClasses = "rounded-5 h-[38px] text-sm font-medium md:min-w-[100px] disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none min-w-full md:mt-0 mt-2.5 hoveranim";
  
  if (type === "primary") {
    return (
      <Button
        {...restProps}
        name={name}
        type="primary"
        shape={shape}
        size={size}
        htmlType={htmlType}
        block={block}
        loading={loading}
        disabled={disabled}
        onClick={onClick}
        icon={icon}
        danger={danger}
        className={`${baseClasses} border-0 bg-primaryColor hover:!bg-buttonActiveBg dark:hover:!bg-buttonActiveBg !text-lightDark disabled:!bg-primaryColor disabled:!text-lightDark focus-visible:bg-buttonActiveBg ${className}`}
        style={style}
      >
        {children}
      </Button>
    );
  }

  if (type === "danger") {
    return (
      <Button
        {...restProps}
        name={name}
        type="primary" // Using primary type since danger is a separate prop
        shape={shape}
        size={size}
        htmlType={htmlType}
        block={block}
        loading={loading}
        disabled={disabled}
        onClick={onClick}
        icon={icon}
        danger={true} // Force danger style
        className={`${baseClasses} border !border-textRed !text-textRed hover:!text-lightDark hover:!bg-textRed dark:hover:!bg-textRed disabled:!bg-textRed disabled:!text-lightDark focus-visible:bg-textRed ${className}`}
        style={style}
      >
        {children}
      </Button>
    );
  }

  if (type === "plain") {
    return (
      <Button
        {...restProps}
        name={name}
        htmlType={htmlType}
        type="text"
        shape={shape}
        size={size}
        block={block}
        loading={loading}
        disabled={disabled}
        onClick={onClick}
        icon={icon}
        danger={danger}
        className={className}
        style={style}
      >
        {children}
      </Button>
    );
  }

  return (
    <Button
      {...restProps}
      name={name}
      htmlType={htmlType}
      type={type as ButtonProps["type"]}
      shape={shape}
      size={size}
      block={block}
      loading={loading}
      disabled={disabled}
      onClick={onClick}
      icon={icon}
      danger={danger}
      className={`${baseClasses} border border-primaryColor !bg-transparent hover:!border-cancelBtnHover hover:!bg-primaryColor hover:!text-lightDark text-primaryColor disabled:text-lightWhite focus-visible:bg-cancelBtnHover ${className}`}
      style={style}
    >
      {children}
    </Button>
  );
};

export default CustomButton;