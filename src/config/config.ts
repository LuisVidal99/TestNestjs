
export const config = () => ({
    port: 3000,
    database: {
        type: 'postgres',
        username: 'postgres',
        password: 'cinco',
        database: 'worker',
        sincronize: true,
        entities: ['dist/entities/*.entity{.ts,.js}'],
        autoLoadEntities: true,
    }
  });