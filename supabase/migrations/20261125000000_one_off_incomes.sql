-- Ingresos sueltos: lo que te pagan tus amigos por su parte de Spotify, una venta, un extra…
-- Se guardan en expenses con kind = 'income' (mismos campos: importe, fecha, quién, previsto o
-- cobrado, gasto fijo). La app los suma a lo que entra en el mes, no a lo que se gasta.
alter table public.expenses
  add column kind text not null default 'expense' check (kind in ('expense', 'income'));

-- Un gasto fijo también puede ser un ingreso fijo (por ejemplo, la parte de Spotify cada mes).
alter table public.recurring_expenses
  add column kind text not null default 'expense' check (kind in ('expense', 'income'));
