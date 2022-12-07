import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import React from 'react';
import classnames from 'classnames';
import './style.css';

export default () => (
    <>
  <Select.Root>
    <Select.Trigger className="SelectTrigger Label" aria-label="Food">
        <Select.Value placeholder="Pagamento" className='space' />
        <Select.Icon>
            <ChevronDownIcon className='Icon'/>
        </Select.Icon>
    </Select.Trigger>

    <Select.Portal className='Label Selector'>
      <Select.Content>
        <Select.ScrollUpButton />
        <Select.Viewport>

          <Select.Group className='group'>
            <Select.Label/> 
            <SelectItem value="Dinheiro" className='component first'>Dinheiro </SelectItem>
            <SelectItem value="Cartão Debito" className='component'>Cartão Debito</SelectItem> 
            <SelectItem value="Cartão Credito" className='component'>Cartão Credito</SelectItem> 
          </Select.Group>

          <Select.Separator />
        </Select.Viewport>
        <Select.ScrollDownButton />
      </Select.Content>
    </Select.Portal>
  </Select.Root>
  </>
);

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator"/>
      </Select.Item>
    );
  });
  