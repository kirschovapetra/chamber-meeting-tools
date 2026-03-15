import {
  HStack,
  VStack,
  Link,
} from '@chakra-ui/react';
import { ColorModeButton } from '@/components/ui/color-mode';
import { usePathname } from 'next/navigation';

const MenuLinks = ({ isMobile = false }) => {
  const LinkComponent = isMobile ? VStack : HStack;
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/', selected: pathname === '/' },
    { name: 'Ah Counter', href: '/ahcounter', selected: pathname === '/ahcounter' },
    { name: 'Timer', href: '/timer', selected: pathname === '/timer' },
    { name: 'Grammarian', href: '/grammarian', selected: pathname === '/grammarian' },
  ];
  return (
    <LinkComponent gap={4} align='center'>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          fontWeight='medium'
          _hover={{
            textDecoration: 'underline',
          }}
          aria-current={link.selected ? 'page' : undefined}
          _currentPage={{ color: 'teal.300' }}
        >
          {link.name}
        </Link>
      ))}
      <ColorModeButton />
    </LinkComponent>
  );
};

export default MenuLinks;